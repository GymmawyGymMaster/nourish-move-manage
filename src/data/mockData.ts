// Mock data for the fitness management system

// Dashboard Overview Interfaces
export interface SubscriptionStatus {
  isExpiring: boolean;
  daysLeft: number;
  hoursLeft: number;
  remainingPercentage: number;
}

export interface ClientStatusBreakdown {
  active: { count: number; percentage: number };
  onHold: { count: number; percentage: number };
  prestart: { count: number; percentage: number };
  expired: { count: number; percentage: number };
  refunded: { count: number; percentage: number };
  noSubscription: { count: number; percentage: number };
  total: number;
}

export interface BusinessGrowth {
  dailyNewClients: { count: number; percentage: number };
  dailyRenewals: { count: number; percentage: number };
}

export interface PlanStatus {
  diet: { current: number; total: number };
  resistance: { current: number; total: number };
  fitness: { current: number; total: number };
  mobility: { current: number; total: number };
}

export interface DashboardMetrics {
  subscription: SubscriptionStatus;
  clientBreakdown: ClientStatusBreakdown;
  businessGrowth: BusinessGrowth;
  planStatus: PlanStatus;
  activeClients: number;
  activeTeamMembers: number;
  totalClients: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'pending' | 'on-hold' | 'prestart' | 'expired' | 'refunded' | 'no-subscription';
  joinDate: string;
  avatar?: string;
  program?: string;
}

export interface Appointment {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  time: string;
  duration: number;
  type: 'consultation' | 'training' | 'assessment' | 'follow-up';
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
  coach: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  source: 'website' | 'referral' | 'social' | 'ads' | 'other';
  assignedTo?: string;
  createdAt: string;
  lastContact?: string;
  notes?: string;
  category: string;
}

export interface FollowUp {
  id: string;
  clientId: string;
  clientName: string;
  type: 'check-in' | 'assessment' | 'payment' | 'program-update' | 'other';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  status: 'pending' | 'completed' | 'overdue';
  description: string;
  assignedTo: string;
  createdAt: string;
}

// Mock Clients
export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    status: 'active',
    joinDate: '2024-01-15',
    program: 'Weight Loss Program',
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    phone: '+1 (555) 234-5678',
    status: 'active',
    joinDate: '2024-02-20',
    program: 'Strength Training',
  },
  {
    id: '3',
    name: 'Emma Davis',
    email: 'emma.davis@email.com',
    phone: '+1 (555) 345-6789',
    status: 'pending',
    joinDate: '2024-08-20',
    program: 'Nutrition Coaching',
  },
];

// Mock Appointments
export const mockAppointments: Appointment[] = [
  {
    id: '1',
    clientId: '1',
    clientName: 'Sarah Johnson',
    date: '2024-08-26',
    time: '09:00',
    duration: 60,
    type: 'training',
    status: 'scheduled',
    coach: 'Alex Rodriguez',
    notes: 'Focus on lower body strength',
  },
  {
    id: '2',
    clientId: '2',
    clientName: 'Mike Chen',
    date: '2024-08-26',
    time: '14:30',
    duration: 45,
    type: 'consultation',
    status: 'scheduled',
    coach: 'Jessica Smith',
    notes: 'Initial consultation for new program',
  },
  {
    id: '3',
    clientId: '3',
    clientName: 'Emma Davis',
    date: '2024-08-27',
    time: '10:00',
    duration: 30,
    type: 'assessment',
    status: 'scheduled',
    coach: 'Alex Rodriguez',
    notes: 'Body composition assessment',
  },
  {
    id: '4',
    clientId: '1',
    clientName: 'Sarah Johnson',
    date: '2024-08-28',
    time: '16:00',
    duration: 60,
    type: 'training',
    status: 'scheduled',
    coach: 'Alex Rodriguez',
  },
  {
    id: '5',
    clientId: '2',
    clientName: 'Mike Chen',
    date: '2024-08-25',
    time: '11:00',
    duration: 60,
    type: 'training',
    status: 'completed',
    coach: 'Jessica Smith',
    notes: 'Great progress on bench press',
  },
];

// Mock Leads
export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Jennifer Wilson',
    email: 'jennifer.wilson@email.com',
    phone: '+1 (555) 987-6543',
    status: 'new',
    source: 'website',
    createdAt: '2024-08-25',
    category: 'Weight Loss',
    notes: 'Interested in 3-month program',
  },
  {
    id: '2',
    name: 'David Brown',
    email: 'david.brown@email.com',
    phone: '+1 (555) 876-5432',
    status: 'contacted',
    source: 'referral',
    assignedTo: 'Alex Rodriguez',
    createdAt: '2024-08-24',
    lastContact: '2024-08-25',
    category: 'Strength Training',
    notes: 'Referred by Sarah Johnson, looking for strength training',
  },
  {
    id: '3',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@email.com',
    phone: '+1 (555) 765-4321',
    status: 'qualified',
    source: 'social',
    assignedTo: 'Jessica Smith',
    createdAt: '2024-08-23',
    lastContact: '2024-08-24',
    category: 'Nutrition',
    notes: 'Ready to start nutrition program next week',
  },
  {
    id: '4',
    name: 'Robert Taylor',
    email: 'robert.taylor@email.com',
    phone: '+1 (555) 654-3210',
    status: 'converted',
    source: 'ads',
    assignedTo: 'Alex Rodriguez',
    createdAt: '2024-08-20',
    lastContact: '2024-08-22',
    category: 'Personal Training',
    notes: 'Signed up for 6-month personal training package',
  },
  {
    id: '5',
    name: 'Michelle Garcia',
    email: 'michelle.garcia@email.com',
    phone: '+1 (555) 543-2109',
    status: 'lost',
    source: 'website',
    assignedTo: 'Jessica Smith',
    createdAt: '2024-08-18',
    lastContact: '2024-08-20',
    category: 'Group Classes',
    notes: 'Decided to go with another gym',
  },
];

// Mock Follow-ups
export const mockFollowUps: FollowUp[] = [
  {
    id: '1',
    clientId: '1',
    clientName: 'Sarah Johnson',
    type: 'check-in',
    priority: 'medium',
    dueDate: '2024-08-27',
    status: 'pending',
    description: 'Weekly progress check-in and measurements',
    assignedTo: 'Alex Rodriguez',
    createdAt: '2024-08-20',
  },
  {
    id: '2',
    clientId: '2',
    clientName: 'Mike Chen',
    type: 'program-update',
    priority: 'high',
    dueDate: '2024-08-26',
    status: 'overdue',
    description: 'Update workout program based on recent progress',
    assignedTo: 'Jessica Smith',
    createdAt: '2024-08-15',
  },
  {
    id: '3',
    clientId: '3',
    clientName: 'Emma Davis',
    type: 'assessment',
    priority: 'high',
    dueDate: '2024-08-28',
    status: 'pending',
    description: 'Initial fitness assessment and goal setting',
    assignedTo: 'Alex Rodriguez',
    createdAt: '2024-08-22',
  },
  {
    id: '4',
    clientId: '1',
    clientName: 'Sarah Johnson',
    type: 'payment',
    priority: 'medium',
    dueDate: '2024-08-25',
    status: 'completed',
    description: 'Monthly subscription payment reminder',
    assignedTo: 'Admin',
    createdAt: '2024-08-20',
  },
];

// Mock data for charts
export const mockLeadConversionData = [
  { name: 'New', value: 25, color: 'hsl(var(--primary))' },
  { name: 'Contacted', value: 18, color: 'hsl(var(--warning))' },
  { name: 'Qualified', value: 12, color: 'hsl(var(--success))' },
  { name: 'Converted', value: 8, color: 'hsl(var(--accent))' },
  { name: 'Lost', value: 5, color: 'hsl(var(--destructive))' },
];

export const mockMonthlyLeadsData = [
  { month: 'Jan', leads: 45, converted: 12 },
  { month: 'Feb', leads: 52, converted: 15 },
  { month: 'Mar', leads: 48, converted: 11 },
  { month: 'Apr', leads: 61, converted: 18 },
  { month: 'May', leads: 55, converted: 16 },
  { month: 'Jun', leads: 67, converted: 22 },
  { month: 'Jul', leads: 58, converted: 19 },
  { month: 'Aug', leads: 43, converted: 14 },
];

export const mockLeadSourceData = [
  { source: 'Website', count: 35, percentage: 51 },
  { source: 'Referral', count: 18, percentage: 26 },
  { source: 'Social Media', count: 10, percentage: 15 },
  { source: 'Ads', count: 5, percentage: 7 },
  { source: 'Other', count: 1, percentage: 1 },
];

// Dashboard Overview Mock Data
export const mockDashboardMetrics: DashboardMetrics = {
  subscription: {
    isExpiring: true,
    daysLeft: 3,
    hoursLeft: 20,
    remainingPercentage: 9,
  },
  clientBreakdown: {
    active: { count: 334, percentage: 74.06 },
    onHold: { count: 7, percentage: 1.55 },
    prestart: { count: 69, percentage: 15.30 },
    expired: { count: 37, percentage: 8.20 },
    refunded: { count: 4, percentage: 0.89 },
    noSubscription: { count: 0, percentage: 0.00 },
    total: 451,
  },
  businessGrowth: {
    dailyNewClients: { count: 0, percentage: 0 },
    dailyRenewals: { count: 0, percentage: 0 },
  },
  planStatus: {
    diet: { current: 0, total: 46 },
    resistance: { current: 0, total: 44 },
    fitness: { current: 0, total: 0 },
    mobility: { current: 0, total: 6 },
  },
  activeClients: 334,
  activeTeamMembers: 0,
  totalClients: 451,
};