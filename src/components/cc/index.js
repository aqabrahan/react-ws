import React from 'react'
import Wizard from "./wizard"

export default function Index() {
  return (
    <Wizard scene={1}>
      <Wizard.Progress>
        <Wizard.Scene num={1} />
        <Wizard.Scene num={2} />
        <Wizard.Scene num={3} />
        <Wizard.Scene num={4} />
      </Wizard.Progress>
      <Wizard.Steps>
        <Wizard.Step num={1} text={"STEP 1"} />
        <Wizard.Step num={2} text={"STEP 2"} />
        <Wizard.Step num={3} text={"STEP 3"} />
        <Wizard.Step num={4} text={"STEP 4"} />
        <Wizard.Step num={5} text={"FINISHED"} />
      </Wizard.Steps>
    </Wizard>
  )
}
