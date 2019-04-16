import angular from 'angular';

import ExampleController from './example-component/example-controller/example-controller.js';
import ExampleDirective from './example-component/example-directive/example-directive.js';
import ExampleService from './example-component/example-service/example-service.js';

export default angular.module('example', [])
	.controller('exampleController', ExampleController)
	.service('exampleService', ExampleService)
	.directive('exampleDirective', () => new ExampleDirective);