import { Component } from '@angular/core'
import { AnimateOnScrollModule } from 'primeng/animateonscroll'
import { AvatarModule } from 'primeng/avatar'
import { LayoutComponent } from '../components/layout/layout.component'
import { AboutMeComponent } from '../section/about-me/about-me.component'
import { CtaComponent } from '../section/cta/cta.component'
import { HeaderComponent } from '../section/header/header.component'
import { HeroComponent } from '../section/hero/hero.component'
import { SkillsComponent } from '../section/skills/skills.component'
@Component({
    selector: 'app-root',
    imports: [
        AnimateOnScrollModule,
        AvatarModule,
        HeaderComponent,
        HeroComponent,
        AboutMeComponent,
        SkillsComponent,
        CtaComponent,
        LayoutComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'website_2.0'
}
