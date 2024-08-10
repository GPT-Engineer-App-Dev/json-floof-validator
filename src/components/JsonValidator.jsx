import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const JsonValidator = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [validationResult, setValidationResult] = useState(null);

  const validateJson = () => {
    try {
      JSON.parse(jsonInput);
      setValidationResult({ valid: true, message: 'Valid JSON' });
    } catch (error) {
      setValidationResult({ valid: false, message: error.message });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 json-validator-container">
      <h1 className="text-3xl font-bold text-center mb-6">JSON Validator</h1>
      <Textarea
        placeholder="Paste your JSON here..."
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        className="min-h-[200px] json-validator-textarea"
      />
      <Button onClick={validateJson} className="w-full json-validator-button">
        Validate JSON
      </Button>
      {validationResult && (
        <Alert variant={validationResult.valid ? "default" : "destructive"}>
          {validationResult.valid ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <AlertTitle>
            {validationResult.valid ? "Valid JSON" : "Invalid JSON"}
          </AlertTitle>
          <AlertDescription>{validationResult.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default JsonValidator;