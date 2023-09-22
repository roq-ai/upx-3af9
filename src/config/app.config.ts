interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own freelancer profile',
    'Apply to jobs',
    'View job details',
    'Update application status',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage job data', 'Manage application data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d9f42c49-254d-405d-9aaf-0593cfd77e53',
};
