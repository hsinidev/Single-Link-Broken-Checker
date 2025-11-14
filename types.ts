
export interface LinkStatusResult {
  status: 'success' | 'redirect' | 'error' | 'info';
  code: number;
  message: string;
  responseTime: number;
  finalUrl: string;
}

export type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;
