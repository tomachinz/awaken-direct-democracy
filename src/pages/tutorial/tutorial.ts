import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Welcome to the <b>Awaken Project</b> by Tom Atkinson',
        description: 'This is the functional skeleton / working mock up of a disruptive app to increase voter turnout and participation driven at the start by just one person - Tom Atkinson in New Zealand; written in a beautiful modern framework. Ionic is an open source SDK based on Cordova that enables developers to build high quality mobile apps with HTML, CSS, and JavaScript. <br><br> <h2>www.awaken.guru</h2><br> github.com/tomachinz/awaken-direct-democracy',
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: 'Project Goals',
        description: '<b>The Project Goals</b><ul>Fraud-proof international quality government elections. Fast feedback public polling and sentiment gathering. Open-source peer to peer electronic voting platform. Designed for New Zealand, aimed at fixing the issues in USA. Private and Verifiable realtime voting in a blockchain. Revokable votes that can be changed up to 7 times. Increase voter turn out by using RealMe.govt.nz Government-backed high confidence authentication for binding votes. Allow demo login via Google and Facebook to gauge public opinion. Indestructibly publish votes into RootStock peer to peer network. This Ethereum compatible Bitcoin-backed private side-chain is a public block-chain similar to Bitcoins blockchain. Allows our government to publish a cryptographic fingerprint to sign the authenticity of the election in blocks of votes spread across time, but still enable visibility on:. size of the enrolment and turnout by polling booth. voting preferences by candidate and party by polling booth. each polling booth has unique keys held at Elections Commission perhaps. Protect privacy by cryptographically scrambling citizens IDs and votes yet maintain audit trail. Allow all citizens of earth to also login and cast non-acting indicative votes. Allow login via oAuth providers such as Google and Facebook to facilitate rapid take-up during launch. System to mirror Parliament and Legislation websites and enable public voting on past and future laws',
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: 'What is Ionic Platform?',
        description: 'The <b>Ionic Platform</b> is a cloud platform for managing and scaling Awaken Direct Democracy App with integrated services like push notifications, native builds, user auth, and live updating.',
        image: 'https://www.awaken.guru/wp-content/uploads/2016/03/logo-awaken-rough.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
