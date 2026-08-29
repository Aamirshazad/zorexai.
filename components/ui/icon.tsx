import {
  ArrowLeft, ArrowLeftRight, ArrowRight, BadgeCheck, BadgeDollarSign, Ban, BookOpen, Bot, Boxes,
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
  type LucideProps,
} from 'lucide-react';

const icons = {
  ArrowLeft, ArrowLeftRight, ArrowRight, BadgeCheck, BadgeDollarSign, Ban, BookOpen, Bot, Boxes,
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
};

type IconName = keyof typeof icons;

type IconProps = LucideProps & { name: IconName };

export type { IconName };

export function Icon({ name, size = 24, strokeWidth = 2, 'aria-hidden': ariaHidden = true, ...props }: IconProps) {
  const Component = icons[name] ?? CircleHelp;
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden={ariaHidden} {...props} />;
}
