import postcss from 'postcss';
import test from 'ava';
import test01 from './01';
import test02 from './02';
import test03 from './03';
import test04 from './04';
import plugin from '../src/index';

function run(t, input, output, opts = {}) {
  return postcss([plugin(opts)])
    .process(input)
    .then(result => {
      t.deepEqual(result.css, output);
      t.deepEqual(result.warnings().length, 0);
    });
}

test('buttons 1', t => run(t, test01.input, test01.output, {}));
test('buttons 2', t => run(t, test02.input, test02.output, {}));
test('buttons 3', t => run(t, test03.input, test03.output, {}));
test('buttons 4', t => run(t, test04.input, test04.output, {}));
