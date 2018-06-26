import _ from 'lodash';

console.log(_.chain([1,2,3]).map(x => [x,x*2]).flatten().sort().value());
