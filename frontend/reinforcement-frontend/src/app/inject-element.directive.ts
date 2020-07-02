import { Directive, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MainBlockComponent } from './main-block/main-block.component';

@Directive({
  selector: '[appInjectElement]'
})
export class InjectElementDirective {

  @Input() public set appInjectElement({
    component,
    index
  }: {
    component: {
      block: MainBlockComponent;
      data?: {
        walls?: {
          top?: any;
          bottom?: any;
          left?: any;
          right?: any;
        };
      };
    };
    index: number;
  }) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component.block as any
    );
    (componentFactory.inputs as any).index = index;
    const componentRef = this.viewContainer.createComponent(componentFactory);
    (componentRef.instance as typeof component.block).index = index;
    (componentRef.instance as typeof component.block).data = component.data;
  }


  constructor(
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

}
