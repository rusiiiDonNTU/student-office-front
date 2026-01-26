import { Input, InputRow } from "..";

export function OtpBlock({ isError, isDisabled, handleCodeChange }) {
    return <InputRow>
        <Input 
            type="tel"
            inputmode="numeric"
            disabled={isDisabled}
            autocomplete="one-time-code"
            pattern="[0-9]*"
            maxLength="1"
            onChange={handleCodeChange}
            isError={isError}
            style={{textAlign: "center"}}
        />
        <Input 
            type="tel"
            inputmode="numeric"
            disabled={isDisabled}
            autocomplete="one-time-code"
            pattern="[0-9]*"
            maxLength="1"
            onChange={handleCodeChange}
            isError={isError}
            style={{textAlign: "center"}}
        />
        <Input 
            type="tel"
            inputmode="numeric"
            disabled={isDisabled}
            autocomplete="one-time-code"
            pattern="[0-9]*"
            maxLength="1"
            onChange={handleCodeChange}
            isError={isError}
            style={{textAlign: "center"}}
        />
        <Input 
            type="tel"
            inputmode="numeric"
            disabled={isDisabled}
            autocomplete="one-time-code"
            pattern="[0-9]*"
            maxLength="1"
            onChange={handleCodeChange}
            isError={isError}
            style={{textAlign: "center"}}
        />
        <Input 
            type="tel"
            inputmode="numeric"
            disabled={isDisabled}
            autocomplete="one-time-code"
            pattern="[0-9]*"
            maxLength="1"
            onChange={handleCodeChange}
            isError={isError}
            style={{textAlign: "center"}}
        />
        <Input 
            type="tel"
            inputmode="numeric"
            disabled={isDisabled}
            autocomplete="one-time-code"
            pattern="[0-9]*"
            maxLength="1"
            onChange={handleCodeChange}
            isError={isError}
            style={{textAlign: "center"}}
        />
    </InputRow>
}