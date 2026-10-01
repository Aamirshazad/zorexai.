import {
  AlertCircle, ArrowLeft, ArrowLeftRight, ArrowRight, BadgeCheck, BadgeDollarSign, Ban, BookOpen, Bot, Boxes,
  Brain, BriefcaseBusiness, Bug, Building2, Cable, CalendarCheck2, CalendarClock, ChartGantt,
  ChartNoAxesCombined, Check, ChevronRight, CircleAlert, CircleCheck, CircleHelp, ClipboardCheck,
  Compass,
  Cloud, Cog, Copy, Cpu, Database, ExternalLink, EyeOff, FileCheck2, FileText, FolderCheck, Gauge,
  Gavel, GitBranch, Globe2, Handshake, Headphones, Hospital, Hourglass, KeyRound, Landmark, Languages, Layers3,
  LayoutDashboard, LifeBuoy, ListFilter, ListTodo, Lock, LockOpen, Mail, Megaphone, Menu, Mic2, Minus, Monitor,
  MoveUpRight, Network, NotepadText, Package, PanelsTopLeft, PlugZap, Quote, Radio, ReceiptText,
  RefreshCcwDot, RefreshCw, Repeat2, Rocket, Route, Router, ScanText, Search, SearchX, Send, Server,
  Settings, Shield, ShieldCheck, ShoppingCart, Shuffle, Sparkles, Star, Stethoscope, Store, Table2, TimerOff,
  TrendingDown, TrendingUp, TriangleAlert, Truck, UserPlus, UserRoundX, Users, Workflow, Wrench, X, Zap,
  CheckCircle2, Clock, FileSpreadsheet, Lightbulb, MessagesSquare, PackageCheck, PackageX, Palette, RotateCcw, Scissors,
  type LucideProps,
} from 'lucide-react';

function Linkedin({ size = 24, strokeWidth = 2, className, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const icons = {
  AlertCircle, ArrowLeft, ArrowLeftRight, ArrowRight, BadgeCheck, BadgeDollarSign, Ban, BookOpen, Bot, Boxes,
  Brain, BriefcaseBusiness, Bug, Building2, Cable, CalendarCheck2, CalendarClock, ChartGantt,
  ChartNoAxesCombined, Check, ChevronRight, CircleAlert, CircleCheck, CircleHelp, ClipboardCheck,
  Compass,
  Cloud, Cog, Copy, Cpu, Database, ExternalLink, EyeOff, FileCheck2, FileText, FolderCheck, Gauge,
  Gavel, GitBranch, Globe2, Handshake, Headphones, Hospital, Hourglass, KeyRound, Landmark, Languages, Layers3,
  LayoutDashboard, LifeBuoy, Linkedin, ListFilter, ListTodo, Lock, LockOpen, Mail, Megaphone, Menu, Mic2, Minus, Monitor,
  MoveUpRight, Network, NotepadText, Package, PanelsTopLeft, PlugZap, Quote, Radio, ReceiptText,
  RefreshCcwDot, RefreshCw, Repeat2, Rocket, Route, Router, ScanText, Search, SearchX, Send, Server,
  Settings, Shield, ShieldCheck, ShoppingCart, Shuffle, Sparkles, Star, Stethoscope, Store, Table2, TimerOff,
  TrendingDown, TrendingUp, TriangleAlert, Truck, UserPlus, UserRoundX, Users, Workflow, Wrench, X, Zap,
  CheckCircle2, Clock, FileSpreadsheet, Lightbulb, MessagesSquare, PackageCheck, PackageX, Palette, RotateCcw, Scissors,
};

type IconName = keyof typeof icons;

type IconProps = LucideProps & { name: IconName };

export type { IconName };

export function Icon({ name, size = 24, strokeWidth = 2, 'aria-hidden': ariaHidden = true, ...props }: IconProps) {
  const Component = icons[name] ?? CircleHelp;
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden={ariaHidden} {...props} />;
}
