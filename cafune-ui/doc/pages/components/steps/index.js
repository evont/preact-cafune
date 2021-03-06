import { Steps, Button } from 'cafune';
const { Step } = Steps;
import { Component } from 'preact';

const stepsArr = [
  { title: 'Step 1', desc: 'this is the step 1' },
  {
    title: 'Step 2',
    icons: { pend: 'search', finish: 'notice' },
    status: 'error'
  },
  {
    title: 'Step 3',
    icon: { error: 'search', process: 'notice' },
    desc: 'now is the step 3'
  },
  { title: 'Step 4', desc: 'this is the step 4' },
  { title: 'Step 5' }
];
export default class StepsComp extends Component {
  state = {
    current: 3
  };
  nextStep = () => {
    const { current } = this.state;
    this.setState({
      current: current === stepsArr.length ? 0 : current + 1
    });
  };
  renderSteps() {
    return stepsArr.map((item, ind) => <Step {...item} key={ind} />);
  }
  render({}, { current }) {
    return (
      <div class="caf-demo-block">
        <Button onClick={this.nextStep}>下一步</Button>
        <p class="caf-demo-title">默认用法</p>
        <Steps step={current}>{this.renderSteps()}</Steps>
        <p class="caf-demo-title">数字进度</p>
        <Steps step={current} isDecimalInd>
          {this.renderSteps()}
        </Steps>
        <p class="caf-demo-title">垂直方向</p>
        <Steps step={current} direction="vertical">
          {this.renderSteps()}
        </Steps>
      </div>
    );
  }
}
