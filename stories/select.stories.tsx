import React from 'react';
import {withKnobs, text, object} from '@storybook/addon-knobs/react';
import {storiesOf} from '@storybook/react';
import Select from "../select";

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('create a Select', () =>
    <Select legend={text('legend', 'Please select')}
            value={text('value', '333')}
            options={object('options', [
              {label: 'aaa', value: '111'},
              {label: 'bbb', value: '222'},
              {label: 'ccc', value: '333'},
            ])}/>
  );
