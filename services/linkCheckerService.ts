
import { LinkStatusResult } from '../types';

// This function simulates a server-side HEAD request to bypass CORS.
// In a real Next.js app, this would be a Server Action or API route making a real fetch.
export const checkLinkStatus = (url: string): Promise<LinkStatusResult> => {
  return new Promise((resolve) => {
    const responseTime = Math.floor(Math.random() * 1300) + 200; // 200ms - 1500ms

    setTimeout(() => {
      if (!url || !url.startsWith('http')) {
        resolve({
          status: 'error',
          code: 400,
          message: 'Bad Request: Invalid URL',
          responseTime,
          finalUrl: url,
        });
        return;
      }

      let result: LinkStatusResult;
      const lowerCaseUrl = url.toLowerCase();

      if (lowerCaseUrl.includes('404') || lowerCaseUrl.includes('notfound') || lowerCaseUrl.includes('broken')) {
        result = {
          status: 'error',
          code: 404,
          message: 'Not Found',
          responseTime,
          finalUrl: url,
        };
      } else if (lowerCaseUrl.includes('500') || lowerCaseUrl.includes('server-error')) {
        result = {
          status: 'error',
          code: 500,
          message: 'Internal Server Error',
          responseTime,
          finalUrl: url,
        };
      } else if (lowerCaseUrl.includes('redirect')) {
        const redirectedUrl = url.replace('redirect', 'resolved');
        result = {
          status: 'redirect',
          code: 301,
          message: 'Moved Permanently',
          responseTime,
          finalUrl: redirectedUrl,
        };
      } else if (lowerCaseUrl.includes('google') || lowerCaseUrl.includes('facebook') || lowerCaseUrl.includes('github')) {
         result = {
          status: 'success',
          code: 200,
          message: 'OK',
          responseTime,
          finalUrl: url,
        };
      } else {
        // Default success case
        result = {
          status: 'success',
          code: 200,
          message: 'OK',
          responseTime,
          finalUrl: url,
        };
      }

      resolve(result);
    }, responseTime);
  });
};
