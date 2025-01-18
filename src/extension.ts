import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // 単純に "Hello World" をコンソールに出力
  console.log("Hello World");
}

export function deactivate() {
  // 拡張機能のクリーンアップが必要な場合にここで処理を書く
}