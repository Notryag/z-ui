import React, { useState } from 'react';
import styles from './index.less';
import { Radio, Form, Button, Slider } from 'antd';
export default function Page() {
  const direction = ['up', 'down', 'right', 'left'];

  const [value, setValue] = useState('up');
  const [widthVal, setWidthVal] = useState(60);
  const [heightVal, setHeightVal] = useState(60);
  const [angleVal, setAngleVal] = useState(0);
  const [angStyl, setAngStyl] = useState({
    display: 'inline-block',
    width: '0px',
    height: '0px',
    borderStyle: 'solid',
    transform: 'rotate(0deg)',
    borderWidth: '0px 30px 60px',
    borderColor: 'transparent transparent rgb(18, 15, 222)',
  });

  const [cssCode, setCssCode] = useState();
  const onChange = (e: any) => {
    setValue(e.target.value);

  };
  const onAfterWidthChange = (val: any) => {
    setWidthVal(val);
    setAngStyl( {
        ...angStyl,
        ...getBorderWidthAndColor(value, widthVal,heightVal,'red')
      } )    
  };

  const onAfterHeightChange = (val: any) => {
    setHeightVal(val);
  };
  const onAfterAngleChange = (val: any) => {
    setAngleVal(val);
  };

  const getBorderWidthAndColor = (
    direction: string,
    w: number,
    h: number,
    color: string,
  ) => {
    const borderWidthAndColor: any = {
      up: {
        borderWidth: `0 ${w / 2}px ${h}px ${w / 2}px`,
        borderColor: `transparent transparent ${color} transparent`,
      },
      down: {
        borderWidth: `${h}px ${w / 2}px 0 ${w / 2}px`,
        borderColor: `${color} transparent transparent transparent`,
      },
      left: {
        borderWidth: `${h / 2}px ${w}px ${h / 2}px 0`,
        borderColor: `transparent ${color} transparent transparent`,
      },
      right: {
        borderWidth: `${h / 2}px 0 ${h / 2}px ${w}px`,
        borderColor: `transparent transparent transparent ${color}`,
      },
    };
    return borderWidthAndColor[direction];
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <Button type="primary">Primary Button</Button>
        <div className={styles.box}>
          <div className={styles.editArea}>
            <Form.Item label="方向">
              <Radio.Group onChange={onChange} value={value}>
                {direction.map(item => 
                   <Radio value={item} key={item}>{item}</Radio>)
              }
                
              </Radio.Group>
            </Form.Item>
            <Form.Item label="宽度">
              <Slider defaultValue={widthVal} onAfterChange={onAfterWidthChange} />
            </Form.Item>
            <Form.Item label="高度">
              <Slider defaultValue={heightVal} onAfterChange={onAfterHeightChange} />
            </Form.Item>
            <Form.Item label="旋转角度">
              <Slider defaultValue={angleVal} onAfterChange={onAfterAngleChange} />
            </Form.Item>
          </div>
          <div className={styles.previewBg}>
            <div className={styles.triangle} style={angStyl}></div>
          </div>
        </div>
        <div className={styles.codeWrap}>
          <h2>css代码：</h2>
          <div>{cssCode}</div>
        </div>
      </div>
    </div>
  );
}
