import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { SharedMaterialDesignModule } from './shared/modules/shared-material-design/shared-material-design.module';
import { GameComponent } from './game/game.component';
import { GameInfoComponent } from './game/game-info/game-info.component';
import { GameFieldComponent } from './game/game-field/game-field.component';
import { HelpSheetComponent } from './game/game-info/help-sheet/help-sheet.component';
import { VictoryOrLossComponent } from './game/game-info/victory-or-loss/victory-or-loss.component';
import { FooterComponent } from './footer/footer.component';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        BaseComponent,
        GameComponent,
        GameInfoComponent,
        GameFieldComponent,
        HelpSheetComponent,
        VictoryOrLossComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedMaterialDesignModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    entryComponents: [HelpSheetComponent, VictoryOrLossComponent],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
