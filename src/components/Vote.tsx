import * as React from 'react';

export interface IProps {
  pair: string[];
  vote: (entry: string) => void;
  hasVoted: string;
}

const Vote: React.SFC<IProps> = (props: IProps) => {
  function isDisabled() {
    return !!props.hasVoted;
  }

  function hasVotedFor(entry) {
    return props.hasVoted === entry;
  }

  return (
    <div className="voting">
      {props.pair.map(entry =>
        <button
          disabled={isDisabled()}
          key={entry}
          onClick={() => props.vote(entry)}>
          <h1>{entry}</h1>
          {hasVotedFor(entry)
            ? <div className="label">Voted</div>
            : null}
        </button>
      )}
    </div>
  );
};

export default Vote;