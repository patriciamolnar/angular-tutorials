import { isPlatformBrowser } from '@angular/common';
import { Directive, Inject, Input, PLATFORM_ID, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

type Condition = 'hideOnMobile' | 'hideOnDesktop';
enum ConditionEnum {
	hideOnMobile = 'hideOnMobile',
	hideOnDesktop = 'hideOnDesktop',
}

@Directive({
  selector: '[pmRemoveDuplicateDomElement]'
})
export class RemoveDuplicateDomElementDirective {
  private isMobile = false;
  private condition: Condition = ConditionEnum.hideOnMobile;
  @Input() set pmRemoveDuplicateDomElement(condition: Condition) {
		this._updateView(condition);
		this.renderer.listen('window', 'resize', () => this._getScreenSize());
	}

  constructor(
		@Inject(PLATFORM_ID) private platformId: string,
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
		if (isPlatformBrowser(this.platformId)) {
			const isMobile = window.innerWidth >= 639 ? false : true;
			if (this.isMobile !== isMobile) {
				this.isMobile = isMobile;
				this._updateView(this.condition);
			}
		}
	}

}
