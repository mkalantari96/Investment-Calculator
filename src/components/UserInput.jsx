import { useState } from "react";

export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initial}
            required
            onChange={(event) =>
              onChangeInput("initial", Number(event.target.value))
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annual}
            onChange={(event) =>
              onChangeInput("annual", Number(event.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expected}
            onChange={(event) =>
              onChangeInput("expected", Number(event.target.value))
            }
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onChangeInput("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
}
