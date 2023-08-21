import {
	Component,
	TemplateRef,
	ViewContainerRef,
	Renderer2
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveDuplicateDomElementDirective } from './remove-duplicate-dom-element.directive';

@Component({
	template: `
		<ng-container *ucRemoveDuplicateDomElement="directiveCondition">
			<p>Some exciting content</p>
		</ng-container>
	`,
})
class FakeComponent {
	directiveCondition: 'hideOnMobile' | 'hideOnDesktop' = 'hideOnMobile';
}

describe('RemoveDuplicateDomElementDirective', () => {
	let fakeTemplateRef: TemplateRef<any>;
	let fakeViewContainerRef: ViewContainerRef;
	let fakeRenderer: Renderer2;
	let fakeComponent: FakeComponent;
	let fixture: ComponentFixture<FakeComponent>;
	let directive: RemoveDuplicateDomElementDirective;

	beforeEach(() => {
		fakeTemplateRef = {
			createEmbeddedView: jest.fn(),
		} as unknown as TemplateRef<any>;

		fakeViewContainerRef = {
			clear: jest.fn(),
			createEmbeddedView: jest.fn(),
		} as unknown as ViewContainerRef;

		fakeRenderer = {
			listen: jest.fn(),
		} as unknown as Renderer2;

		TestBed.configureTestingModule({
			declarations: [RemoveDuplicateDomElementDirective, FakeComponent],
			providers: [
				{ provide: TemplateRef, useValue: fakeTemplateRef },
				{ provide: ViewContainerRef, useValue: fakeViewContainerRef },
				{ provide: Renderer2, useValue: fakeRenderer },
			],
		});

		fixture = TestBed.createComponent(FakeComponent);
		fakeComponent = fixture.componentInstance;
		fixture.detectChanges();
		directive = new RemoveDuplicateDomElementDirective(
			fakeTemplateRef,
			fakeViewContainerRef,
			fakeRenderer
		);
	});

	it('creates an instance', () => {
		expect(directive).toBeTruthy();
	});

	// testing desktop size
	it('shows element on desktop if input is hideOnMobile', () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 1024,
		});

		fakeComponent.directiveCondition = 'hideOnMobile';
		directive.ngOnInit();
		directive.pmRemoveDuplicateDomElement = 'hideOnMobile';
		directive['_getScreenSize']();
		directive['_updateView']('hideOnMobile');

		expect(fakeViewContainerRef.createEmbeddedView).toHaveBeenCalledWith(
			fakeTemplateRef
		);
	});

	it('hides element on desktop if input is hideOnDesktop', () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 1024,
		});

		fakeComponent.directiveCondition = 'hideOnDesktop';
		directive.ngOnInit();
		directive.pmRemoveDuplicateDomElement = 'hideOnDesktop';
		directive['_getScreenSize']();
		directive['_updateView']('hideOnDesktop');

		expect(fakeViewContainerRef.clear).toHaveBeenCalled();
	});

	// testing mobile size
	it('shows element on mobile if input is hideOnDesktop', () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 365,
		});

		fakeComponent.directiveCondition = 'hideOnDesktop';
		directive.ngOnInit();
		directive.pmRemoveDuplicateDomElement = 'hideOnDesktop';
		directive['_getScreenSize']();
		directive['_updateView']('hideOnDesktop');

		expect(fakeViewContainerRef.createEmbeddedView).toHaveBeenCalledWith(
			fakeTemplateRef
		);
	});

	it('hides element on mobile if input is hideOnMobile', () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 365,
		});

		fakeComponent.directiveCondition = 'hideOnMobile';
		directive.ngOnInit();
		directive.pmRemoveDuplicateDomElement = 'hideOnMobile';
		directive['_getScreenSize']();
		directive['_updateView']('hideOnMobile');

		expect(fakeViewContainerRef.clear).toHaveBeenCalled();
	});
});

