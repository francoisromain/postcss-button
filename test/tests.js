import postcss from 'postcss';
import test from 'ava';
import test01 from './01';
import test02 from './02';
import plugin from '../src/index';

function run(t, input, output, opts = {}) {
  return postcss([plugin(opts)]).process(input)
    .then(result => {
      t.deepEqual(result.css, output);
      t.deepEqual(result.warnings().length, 0);
    });
}

test('buttons 1', t => run(t, test01.input, test01.output, {}));
test('buttons 2', t => run(t, test02.input, test02.output, {}));
