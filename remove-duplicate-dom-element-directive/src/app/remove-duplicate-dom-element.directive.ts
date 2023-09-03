import { Directive, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

enum ConditionEnum {
	hideOnMobile = 'hideOnMobile',
	hideOnDesktop = 'hideOnDesktop',
}

type Condition = `${ConditionEnum}`; // "hideOnMobile" | "hideOnDesktop"

@Directive({
  	selector: '[pmRemoveDuplicateDomElement]'
})
export class RemoveDuplicateDomElementDirective implements OnInit {
	private isMobile = false;
	private condition: Condition = ConditionEnum.hideOnMobile;
	@Input() set pmRemoveDuplicateDomElement(condition: Condition) {
		this._updateView(condition);
		this.renderer.listen('window', 'resize', () => this._getScreenSize());
	}

  	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
		private renderer: Renderer2
	) {}


  	ngOnInit(): void {
		this._getScreenSize();
	}

  	private _updateView(condition: Condition) {
		this.condition = condition;
		this.viewContainer.clear();
		if (condition === ConditionEnum.hideOnMobile && this.isMobile) {
			this.viewContainer.clear();
		} else if (condition === ConditionEnum.hideOnDesktop && !this.isMobile) {
			this.viewContainer.clear();
		} else {
			this.viewContainer.createEmbeddedView(this.templateRef);
		}
	}

  	private _getScreenSize() {
		const isMobile = window.innerWidth < 640;
		if (this.isMobile !== isMobile) {
			this.isMobile = isMobile;
			this._updateView(this.condition);
		}
	}

}
