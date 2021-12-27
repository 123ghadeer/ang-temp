import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckAdminRuleGuard implements CanActivate {
  constructor(
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = localStorage.getItem("user");
    if (!user) {
      return false
    }
    const authData = JSON.parse(user);
    return authData?.rule === "admin";
  }
}
