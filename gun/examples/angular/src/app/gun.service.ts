import { NgModule, Injectable } from '@angular/core';
import Gun from 'gun/gun';

@Injectable()
export class GunDb {
    readonly gun = Gun('https://ws.speed2earn.games/gun'');
}
