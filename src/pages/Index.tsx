import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useTheme } from "@/contexts/ThemeContext";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { SubscriptionAlert } from "@/components/dashboard/SubscriptionAlert";
import { ClientBreakdown } from "@/components/dashboard/ClientBreakdown";
import { BusinessGrowth } from "@/components/dashboard/BusinessGrowth";
import { PlanStatus } from "@/components/dashboard/PlanStatus";
import { QuickReports } from "@/components/dashboard/QuickReports";
import { mockDashboardMetrics } from "@/data/mockData";
import {
  Users,
  Calendar,
  TrendingUp,
  Activity,
  Dumbbell,
  Utensils,
  ClipboardCheck,
  DollarSign,
  UserCheck,
} from "lucide-react";

const Index = () => {
  const { branding } = useTheme();
  const metrics = mockDashboardMetrics;
  
  return (
    <DashboardLayout title={branding.dashboardTitle}>
      <div className="space-y-6">
        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Hi Yussef Ashraf
          </h2>
          <p className="text-muted-foreground">
            Welcome back! Your clients are excitedly looking forward to your next steps.
          </p>
        </div>

        {/* Subscription Alert */}
        <SubscriptionAlert subscription={metrics.subscription} />

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard
            title="Remaining Days"
            value={`${metrics.subscription.remainingPercentage}%`}
            icon={Calendar}
            description={`${metrics.subscription.daysLeft} days left`}
          />
          <StatsCard
            title="Active Clients"
            value="90%"
            change={`${metrics.activeClients} clients`}
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Active Team Members"
            value={`${metrics.activeTeamMembers}%`}
            change="No active members"
            changeType="neutral"
            icon={UserCheck}
          />
        </div>

        {/* Main Dashboard Content */}
        <div className="grid gap-6 lg:grid-cols-2">
          <ClientBreakdown breakdown={metrics.clientBreakdown} />
          <BusinessGrowth growth={metrics.businessGrowth} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <PlanStatus planStatus={metrics.planStatus} />
          <QuickReports />
        </div>

        {/* Secondary Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Clients"
            value={metrics.totalClients.toString()}
            change="+12% from last month"
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Active Programs"
            value="96"
            change="All programs running"
            changeType="positive"
            icon={Activity}
          />
          <StatsCard
            title="Appointments Today"
            value="23"
            change="2 cancelled"
            changeType="neutral"
            icon={Calendar}
          />
          <StatsCard
            title="Monthly Revenue"
            value="$45,231"
            change="+15% from last month"
            changeType="positive"
            icon={DollarSign}
          />
        </div>

        {/* Activity and Actions */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
