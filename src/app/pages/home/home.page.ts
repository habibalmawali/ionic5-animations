import { Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("header", { read:ElementRef, static: true }) header: ElementRef;

  constructor(private animationCtrl: AnimationController) { 

    
  }

  play() {
    const animateHeader = this.animationCtrl.create()
      .addElement(this.header.nativeElement)
      .duration(1000)
      .iterations(1)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(-100px)', 'translateY(0px)');
      animateHeader.play();
  }

}
