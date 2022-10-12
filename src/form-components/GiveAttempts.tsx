import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    //state
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function removeAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function addAttempt() {
        let attempts = attemptsLeft;
        if (!Number.isInteger(attemptsRequested)) {
            attempts = attemptsLeft;
        } else {
            attempts = attemptsLeft + attemptsRequested;
        }

        setAttemptsLeft(attempts);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="Attempts">
                <Form.Label>Attempts: {attemptsLeft}</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: ChangeEvent) =>
                        setAttemptsRequested(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <div>
                <Button onClick={removeAttempt} disabled={attemptsLeft === 0}>
                    Use
                </Button>
                <Button onClick={addAttempt}>Gain</Button>
            </div>
        </div>
    );
}
