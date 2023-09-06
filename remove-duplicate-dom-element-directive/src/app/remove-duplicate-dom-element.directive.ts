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
	private _isMobile = false;
	private _condition: Condition = ConditionEnum.hideOnMobile;
	@Input() set pmRemoveDuplicateDomElement(condition: Condition) {
		this._updateView(condition);
		this._renderer.listen('window', 'resize', () => this._getScreenSize());
	}

  	constructor(
		private _templateRef: TemplateRef<any>,
		private _viewContainer: ViewContainerRef,
		private _renderer: Renderer2
	) {}


  	ngOnInit(): void {
		this._getScreenSize();
	}

  	private _updateView(condition: Condition) {
		this._condition = condition;
		this._viewContainer.clear();
		if (condition === ConditionEnum.hideOnMobile && this._isMobile) {
			this._viewContainer.clear();
		} else if (condition === ConditionEnum.hideOnDesktop && !this._isMobile) {
			this._viewContainer.clear();
		} else {
			this._viewContainer.createEmbeddedView(this._templateRef);
		}
	}

  	private _getScreenSize() {
		const isMobile = window.innerWidth < 640;
		if (this._isMobile !== isMobile) {
			this._isMobile = isMobile;
			this._updateView(this._condition);
		}
	}

}
