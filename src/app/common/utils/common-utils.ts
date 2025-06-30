import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonUtils {
  constructor(private injector: Injector) {}

  isFeatureEnabled(name: string): Boolean {
    return true;
  }

  // use to replace %s
  static formatConstant(template: string, ...values: string[]): string {
    return values.reduce(
      (msg, val, i) => msg.replace(`$${i + 1}`, val),
      template
    );
  }
}
