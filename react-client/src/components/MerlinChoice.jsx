import React from 'react';

class MerlinChoice extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>

      <Stats />

      <Timer />

        <h3> Choose Merlin </h3>
        EnterMerlinChoice Not obvious if it should be a component or
        just in-lined, here
        (Shown only to the Assassin)
      </div>
      )
  }
}

export default MerlinChoice;