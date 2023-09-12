const mapping: Record<string, string> = {
  organizations: 'organization',
  questions: 'question',
  responses: 'response',
  surveys: 'survey',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
