declare module 'lucide-react' {
  import * as React from 'react';
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  export type Icon = React.FC<LucideProps>;
  export const Star: Icon;
  export const CheckCircle2: Icon;
  export const Quote: Icon;
  export const MapPin: Icon;
  export const Building2: Icon;
  export const TrendingUp: Icon;
  export const Phone: Icon;
  export const ArrowRight: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const ChevronRight: Icon;
  export const Calendar: Icon;
  export const Lock: Icon;
  export const ShieldCheck: Icon;
  export const ShieldAlert: Icon;
  export const XCircle: Icon;
  export const Zap: Icon;
  export const Clock: Icon;
  export const FileText: Icon;
  export const BarChart3: Icon;
  export const DollarSign: Icon;
  export const Check: Icon;
  export const Sparkles: Icon;
  export const Send: Icon;
  export const FileSearch: Icon;
  export const MessageSquare: Icon;
  export const Layers: Icon;
  export const Award: Icon;
  export const UserCheck: Icon;
  export const ExternalLink: Icon;
  const icons: { [key: string]: Icon };
  export default icons;
}
