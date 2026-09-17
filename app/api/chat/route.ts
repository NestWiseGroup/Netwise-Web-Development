import { NextResponse } from "next/server";

interface KnowledgeItem {
  keywords: string[];
  response: string;
}

const KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    keywords: ["fee", "cost", "commission", "rate", "price", "percentage", "charges", "hidden"],
    response:
      "We operate on a straightforward 22% flat fee on gross booking revenues. There are no hidden markups, no linen deductions, and no credit card surcharges. There is a transparent, one-time $600 onboarding fee to professionally prepare, stage, photograph, and list your home.",
  },
  {
    keywords: ["contract", "lock", "lock-in", "cancel", "term", "leave", "exit", "duration", "commitment"],
    response:
      "There is zero long-term lock-in. Our agreements are strictly month-to-month. If your goals or circumstances change, you can walk away anytime with a simple 30-day notice with zero penalty or loss of control over your calendar.",
  },
  {
    keywords: ["clean", "cleaning", "cleaner", "housekeeping", "turnover", "linen", "laundry", "turno"],
    response:
      "We partner with vetted, background-checked professional cleaners through Turno. After every stay, cleaners follow an extensive turnover checklist and upload photo-verified inspection reports so you know your property is spotless for every guest.",
  },
  {
    keywords: ["pricing", "dynamic", "nightly", "daily", "algorithm", "rates", "recalculate", "airDNA"],
    response:
      "We set and adjust your nightly price daily using live local market data. Our pricing updates factor in Seattle and Bellevue event calendars, conferences, seasonal demand surges, and neighborhood competitor rates—ensuring you never underprice high-demand dates or sit vacant during slow periods.",
  },
  {
    keywords: ["channel", "airbnb", "vrbo", "booking.com", "sites", "ota", "google", "agoda", "direct", "double booking", "calendar"],
    response:
      "We list your property across all major booking channels: Airbnb, Vrbo, Booking.com, Google Vacation Rentals, and Agoda, plus an optional direct booking site with 0% platform commission. All platforms are synchronized to one master calendar, completely eliminating double-booking risk.",
  },
  {
    keywords: ["response", "sla", "message", "guest", "inquiry", "support", "time", "hours", "minute"],
    response:
      "We answer guest inquiries and messages around the clock, usually within three minutes. Fast, attentive communication ensures high review scores and higher search ranking across booking platforms.",
  },
  {
    keywords: ["audit", "report", "free", "5-point", "48", "comp", "estimate"],
    response:
      "Our Free 5-Point Property Revenue Audit compares your property against 12 similar homes nearby. It reveals what you're charging, what the market is earning, and the top three changes to boost your net revenue. It takes two minutes to request on our website, arrives within 48 hours, and is 100% free with no sales pressure.",
  },
  {
    keywords: ["founder", "emmanuel", "who", "team", "muvunyi", "background", "experience", "people"],
    response:
      "NestWise Group was founded by Emmanuel N. Muvunyi, who brings 15+ years of leadership in global supply chain and business operations. He is a Washington State resident, a Community Police Academy graduate, and has spent over a decade building local community and vendor relationships. Our dedicated local team of four is based right here in Washington.",
  },
  {
    keywords: ["seattle", "smc", "6.600", "permit", "license", "zoning", "rules", "law", "bellevue", "regulation", "taxes"],
    response:
      "In Seattle (SMC 6.600), operators can host up to two short-term rental units (primary residence plus one secondary unit). In Bellevue, short-term rentals require registration and King County lodging tax compliance. We guide you through city regulations, permit filings, and tax reporting so your property stays 100% compliant.",
  },
  {
    keywords: ["payout", "payment", "5th", "statement", "money", "bank", "deposit", "accounting"],
    response:
      "Owners receive net payouts via automated direct deposit accompanied by a clear, itemized financial report on the 5th of every month. The report breaks down every booking, gross earnings, taxes, and cleaning distributions cleanly.",
  },
  {
    keywords: ["call", "phone", "contact", "calendly", "schedule", "talk", "number", "reach"],
    response:
      "You can reach our team directly at (425) 414-6819 or click 'Book a Call' in the navigation bar to schedule a 30-minute introductory conversation with Emmanuel N. Muvunyi.",
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
        "Thanks for asking! At NestWise Group, we provide full-service property co-hosting across Washington State for a flat 22% fee (plus a $600 one-time onboarding fee), with zero lock-in contracts. Would you like to request our free 48-hour Property Audit, or speak directly with our team at (425) 414-6819?",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      response:
        "I'm here to help with any questions about our 22% flat fee co-hosting, Turno cleaning process, daily pricing updates, or Seattle/Bellevue regulations. You can also call us directly at (425) 414-6819.",
    });
  }
}
