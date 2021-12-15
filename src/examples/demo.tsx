import React, {useState} from 'react';
import styles from './tri.less';
import { Radio, Form, Button ,Slider} from 'antd';
export default function Page() {
  const [value, setValue] = useState(1)
  const [widthVal, setWidthVal] = useState(0)
  const [heightVal, setHeightVal] = useState(0)
  const [angleVal, setAngleVal] = useState(0)
  const [angStyl, setAngStyl] = useState({
    display: 'inline-block',
    width: '0px', height: '0px',
    borderStyle: 'solid',
    transform: 'rotate(0deg)',
    borderWidth: '0px 30px 60px',
    borderColor: 'transparent transparent rgb(18, 15, 222)'
  })


  const [cssCode, setCssCode] = useState()
  const onChange =( e:any) =>{
    setValue(e.target.value)
  }
  const onAfterWidthChange = (val:any) => {
    setWidthVal(val)
  }

  const onAfterHeightChange = (val: any) => {
    setHeightVal(val)
  }
  const onAfterAngleChange= (val: any) => {
    setAngleVal(val)
  }


  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
      <Button type="primary">Primary Button</Button>
        <div className={styles.box}>
          <div className={styles.editArea}>
            < Form.Item label="方向">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="宽度">
              <Slider defaultValue={0}  onAfterChange={onAfterWidthChange}/>
            </Form.Item>
            <Form.Item label="高度">
              <Slider defaultValue={0}  onAfterChange={onAfterHeightChange}/>
            </Form.Item>
            <Form.Item label="旋转角度">
              <Slider defaultValue={0}  onAfterChange={onAfterAngleChange}/>
            </Form.Item>
          </div>
          <div className={styles.previewBg}>
            <div className="triangle" style={angStyl}></div>
          </div>
        </div>
        <div className={styles.codeWrap}>
          <h2>css代码：</h2>
          <div>
            {cssCode}
          </div>
        </div>
      </div>
    </div>
  );
}


