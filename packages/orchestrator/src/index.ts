/**
 * Sends a message to the parent window with the specified action and payload.
 *
 * @param action - The action type to associate with the message.
 * @param payload - The data to be sent with the message.
 *
 * @template T - The type of the payload to be sent in the message.
 */

export function broadcast<T = unknown>(action: string, payload: T): void {
  window.parent.postMessage({ action, payload });
}

/**
 * Registers an event listener for messages that match the specified action.
 *
 * @param action - The action type to listen for in incoming messages.
 * @param callback - A function to be invoked with the message payload when a
 *                   message with the specified action type is received.
 *
 * @template T - The type of the payload expected in the message.
 */

export function listen<T = unknown>(
  action: string,
  callback: (data: T) => void
): void {
  window.addEventListener(
    "message",
    (event: MessageEvent<{ action: string; payload: T }>) => {
      const { payload, action: payloadAction } = event.data;
      if (payloadAction === action) {
        callback(payload);
      }
    }
  );
}
