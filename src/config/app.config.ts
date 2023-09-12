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
  ownerRoles: ['Researcher'],
  customerRoles: ['Vendor'],
  tenantRoles: ['Builder', 'Fielder', 'Researcher', 'Data Processor'],
  tenantName: 'Organization',
  applicationName: 'Srvy',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Receive surveys from the Fielder', 'Submit completed surveys', 'View completed surveys'],
  ownerAbilities: [
    'Manage Organization',
    'Invite Builders, Fielders, and Data Processors to the Organization',
    'Remove Builders, Fielders, and Data Processors from the Organization',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/e057d647-a164-4959-9ce7-a591a282fb6a',
};
