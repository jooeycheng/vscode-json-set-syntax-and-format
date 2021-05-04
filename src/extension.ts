import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  const disposable = vscode.commands.registerCommand('json-set-syntax-and-format.run', async () => {
    const languageId = 'json';
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
      await vscode.languages.setTextDocumentLanguage(activeEditor.document, languageId);
      await vscode.commands.executeCommand('editor.action.formatDocument');
    }
  });

  context.subscriptions.push(disposable);
}

export async function deactivate(): Promise<void> {
  //
}
