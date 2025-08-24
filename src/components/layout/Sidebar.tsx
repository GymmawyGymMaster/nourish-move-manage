import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  LayoutDashboard,
  Users,
  Calendar,
  UserPlus,
  TrendingUp,
  ClipboardCheck,
  Dumbbell,
  Utensils,
  Bell,
  Settings,
  DollarSign,
  FileText,
  Activity,
  Heart,
  Shield,
  Briefcase,
  BarChart3,
  Smartphone,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Clients",
    icon: Users,
    items: [
      { title: "All Clients", href: "/clients" },
      { title: "Follow up", href: "/clients/followup" },
    ],
  },
  {
    title: "Calendar",
    icon: Calendar,
    items: [
      { title: "Appointments", href: "/calendar/appointments" },
      { title: "Next Appointment", href: "/calendar/next" },
      { title: "Appointment Report", href: "/calendar/reports" },
      { title: "Available Appointment", href: "/calendar/available" },
    ],
  },
  {
    title: "Leads",
    icon: UserPlus,
    items: [
      { title: "Leads", href: "/leads" },
      { title: "Leads Charts", href: "/leads/charts" },
      { title: "Lead Responses", href: "/leads/responses" },
      { title: "Lead Referrers", href: "/leads/referrers" },
    ],
  },
  {
    title: "Client Check-ins",
    icon: ClipboardCheck,
    items: [
      { title: "All Check-ins", href: "/checkins" },
      { title: "Quick View", href: "/checkins/quick" },
      { title: "Submitted Checklists", href: "/checkins/submitted" },
      { title: "Upcoming Check-ins", href: "/checkins/upcoming" },
      { title: "Unsubmitted Check-ins", href: "/checkins/unsubmitted" },
    ],
  },
  {
    title: "Client App Requests",
    icon: Smartphone,
    items: [
      { title: "Workout", href: "/requests/workout" },
      { title: "Diet", href: "/requests/diet" },
    ],
  },
  {
    title: "Client Reminders",
    icon: Bell,
    items: [
      { title: "All Reminders", href: "/reminders" },
      { title: "Reminder Types", href: "/reminders/types" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    items: [
      { title: "Client Types", href: "/settings/client-types" },
      { title: "Client Groups", href: "/settings/client-groups" },
      { title: "Client General Files", href: "/settings/files" },
      { title: "Call Types", href: "/settings/call-types" },
    ],
  },
  {
    title: "Finance",
    icon: DollarSign,
    items: [
      { title: "All Invoices", href: "/finance/invoices" },
      { title: "Due Invoices", href: "/finance/due" },
      { title: "Account Statement", href: "/finance/statements" },
      { title: "All Products", href: "/finance/products" },
      { title: "Subscriptions", href: "/finance/subscriptions" },
      { title: "Financial Reports", href: "/finance/reports" },
      { title: "Mobile Wallets", href: "/finance/wallets" },
    ],
  },
  {
    title: "Forms",
    icon: FileText,
    items: [
      { title: "Check-in Forms", href: "/forms/checkins" },
      { title: "Check-in Q&A", href: "/forms/qa" },
      { title: "Questions", href: "/forms/questions" },
      { title: "Check-in Types", href: "/forms/types" },
      { title: "Labels", href: "/forms/labels" },
    ],
  },
  {
    title: "Diet",
    icon: Utensils,
    items: [
      { title: "All Diets", href: "/diet" },
      { title: "Client Medical Cases", href: "/diet/medical" },
      { title: "Diseases", href: "/diet/diseases" },
      { title: "All Food", href: "/diet/food" },
      { title: "Food Groups", href: "/diet/groups" },
    ],
  },
  {
    title: "Workout",
    icon: Dumbbell,
    items: [
      { title: "Resistance", href: "/workout/resistance" },
      { title: "Plans", href: "/workout/plans" },
      { title: "Techniques", href: "/workout/techniques" },
      { title: "Categories", href: "/workout/categories" },
    ],
  },
  {
    title: "Fitness",
    icon: Activity,
    items: [
      { title: "Plans", href: "/fitness/plans" },
      { title: "Categories", href: "/fitness/categories" },
    ],
  },
  {
    title: "Mobility",
    icon: Heart,
    items: [
      { title: "Plans", href: "/mobility/plans" },
      { title: "Categories", href: "/mobility/categories" },
    ],
  },
  {
    title: "Administration",
    icon: Shield,
    items: [
      { title: "All Team Members", href: "/admin/team" },
      { title: "Active Team Members", href: "/admin/active" },
      { title: "Roles and Permissions", href: "/admin/roles" },
      { title: "Team Productivity", href: "/admin/productivity" },
    ],
  },
  {
    title: "Reports",
    icon: BarChart3,
    items: [
      { title: "Clients", href: "/reports/clients" },
      { title: "Accounting", href: "/reports/accounting" },
      { title: "Subscriptions", href: "/reports/subscriptions" },
      { title: "Diets", href: "/reports/diets" },
      { title: "Workouts", href: "/reports/workouts" },
      { title: "System Analysis", href: "/reports/system" },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(section => section !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const isParentActive = (items: { href: string }[]) => {
    return items.some(item => location.pathname === item.href);
  };

  return (
    <div className="flex h-screen w-64 flex-col bg-surface border-r border-border">
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">FitPro</h1>
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-3 py-2">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.items ? (
                <Collapsible
                  open={openSections.includes(item.title)}
                  onOpenChange={() => toggleSection(item.title)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`w-full justify-between h-9 px-3 ${
                        isParentActive(item.items)
                          ? "bg-surface-secondary text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-surface-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        <span className="text-sm">{item.title}</span>
                      </div>
                      {openSections.includes(item.title) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pl-6 mt-1">
                    {item.items.map((subItem) => (
                      <Link key={subItem.href} to={subItem.href}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start h-8 px-3 ${
                            isActive(subItem.href)
                              ? "bg-primary text-primary-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-surface-secondary"
                          }`}
                        >
                          <span className="text-sm">{subItem.title}</span>
                        </Button>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link to={item.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start h-9 px-3 ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-secondary"
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-3" />
                    <span className="text-sm">{item.title}</span>
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}