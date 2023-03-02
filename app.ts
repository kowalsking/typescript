function Uni(name: string): any {
  console.log('Initialization: ' + name)
  return function() {
    console.log('Invoke: ' + name)
  }
}

@Uni('Class')
class C {
  @Uni('Property')
  props!: any;

  @Uni('Static Property')
  static prop: any;

  @Uni('Static Method')
  static smethod(@Uni('Static Parameter') a: any) {}

  @Uni('Method')
  method(@Uni('Parameter') a: any) {}
  
  constructor(@Uni('Constructor Parameter') a: any) {
    
  }
}

/**
 * Initialization: Property
Invoke: Property
Initialization: Method
Initialization: Parameter
Invoke: Parameter
Invoke: Method
Initialization: Static Property
Invoke: Static Property
Initialization: Static Method
Initialization: Static Parameter
Invoke: Static Parameter
Invoke: Static Method
Initialization: Class
Initialization: Constructor Parameter
Invoke: Constructor Parameter
Invoke: Class
 */