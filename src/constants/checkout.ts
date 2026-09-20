export const CHECKOUT_URLS = {
  basic: 'https://pay.wiapy.com/evkgyl8N2giI',
  complete: 'https://pay.wiapy.com/QXOJEs1oPHEN'
} as const;

export type PlanType = keyof typeof CHECKOUT_URLS;
