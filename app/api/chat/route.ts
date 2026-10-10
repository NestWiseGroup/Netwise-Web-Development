import { NextResponse } from "next/server";

interface KnowledgeItem {
  keywords: string[];
  response: string;
}

const KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    keywords: ["fee", "cost", "commission", "rate", "price", "percentage", "charges", "hidden"],
    response:
      "Our fee is 22% of booking revenue. Cleaning is paid by the guest. Repairs and supplies are billed at cost, with receipts. There are no markups on cleaning, linens, or repairs, and no admin charges. There is a transparent, one-time $600 setup fee to professionally photograph, install a keyless smart lock, and list your home on 6 booking channels.",
  },
  {
    keywords: ["contract", "lock", "lock-in", "cancel", "term", "leave", "exit", "duration", "commitment"],
    response:
      "Our agreement is month-to-month. You can cancel at any time with 30 days' notice and no cancellation fees.",
  },
  {
    keywords: ["clean", "cleaning", "cleaner", "housekeeping", "turnover", "linen", "laundry", "turno"],
    response:
      "We book background-checked cleaners through Turno. After every stay, cleaners follow a detailed checklist and upload photo-verified inspection reports so your property is always guest-ready.",
  },
  {
    keywords: ["pricing", "dynamic", "nightly", "daily", "algorithm", "rates", "recalculate", "airDNA"],
    response:
      "We update your nightly rate every day using live market data, nearby listings, local demand, and Seattle events. Prices rise on busy nights and drop to fill quiet ones, and we never go below your custom floor rate.",
  },
  {
    keywords: ["channel", "airbnb", "vrbo", "booking.com", "sites", "ota", "google", "agoda", "direct", "double booking", "calendar"],
    response:
      "We list your property across 6 channels: Airbnb, Vrbo, Booking.com, Google, Agoda, and your own direct booking site. All channels sync to one master calendar, reducing the risk of double bookings.",
  },
  {
    keywords: ["response", "sla", "message", "guest", "inquiry", "support", "time", "hours", "minute"],
    response:
      "Guest messages are answered around the clock by our local team. Attentive, quick answers protect your ratings and search ranking.",
  },
  {
    keywords: ["audit", "report", "free", "5-point", "48", "comp", "estimate"],
    response:
      "Our free revenue audit analyzes your address and delivers a short report within 48 hours: earnings from similar homes nearby, seasonal pricing potential, and city rules for your property. It's completely free with no obligation.",
  },
  {
    keywords: ["founder", "emmanuel", "who", "team", "muvunyi", "background", "experience", "people"],
    response:
      "NestWise Group was founded by Emmanuel N. Muvunyi (Founder & CEO), who brings 15 years of leadership in operations, global supply chain, and facilities. He lives in Washington State, is a Community Police Academy graduate, and has built deep relationships with local tradespeople. Our local team in Washington handles every part of your rental.",
  },
  {
    keywords: ["seattle", "smc", "6.600", "permit", "license", "zoning", "rules", "law", "bellevue", "regulation", "taxes", "kirkland", "redmond"],
    response:
      "Every city has unique short-term rental rules: Seattle requires an operator license (max 2 units, one primary residence); Bellevue prohibits whole single-family home rentals under 30 days but permits eligible condos/apartments; Kirkland and Redmond have their own licensing requirements. We check your address before you commit to ensure compliance.",
  },
  {
    keywords: ["payout", "payment", "5th", "statement", "money", "bank", "deposit", "accounting"],
    response:
      "Owners receive direct ACH deposits by the 5th of each month for the previous month's stays, along with a clear itemized statement listing every booking, nightly rate, cleaning cost, and our 22% fee.",
  },
  {
    keywords: ["call", "phone", "contact", "calendly", "schedule", "talk", "number", "reach"],
    response:
      "You can reach our team directly at (425) 414-6819 or click 'Book a Call' in the navigation bar to schedule a conversation with Emmanuel N. Muvunyi, Founder & CEO.",
  },
];

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const lower = message.toLowerCase();

    // Match against knowledge items
    let matchedItem: KnowledgeItem | null = null;
    let maxMatchCount = 0;

    for (const item of KNOWLEDGE_BASE) {
      let count = 0;
      for (const kw of item.keywords) {
        if (lower.includes(kw)) {
          count += 1;
        }
      }
      if (count > maxMatchCount) {
        maxMatchCount = count;
        matchedItem = item;
      }
    }

    if (matchedItem && maxMatchCount > 0) {
      return NextResponse.json({ response: matchedItem.response });
    }

    // Default intelligent fallback
    return NextResponse.json({
      response:
        "Thanks for asking! At NestWise Group, we provide local Airbnb co-hosting across Greater Seattle and the Eastside for 22% of booking revenue (plus a $600 one-time setup fee), month-to-month with 30 days' notice. Would you like to request our free 48-hour Property Audit, or speak directly with our team at (425) 414-6819?",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      response:
        "I'm here to help with any questions about our 22% fee, Turno cleaners, daily pricing updates, or Seattle and Eastside city regulations. You can also call us directly at (425) 414-6819.",
    });
  }
}
