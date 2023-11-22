import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class BotService {
  private apiUrl = process.env.API_URL;
  private botId = process.env.BOT_ID; // Use 'private' instead of 'let'
  private apiKey = process.env.API_KEY;

  async sendMessage(recipientMobile: string): Promise<any> {
    const endpoint = `${this.apiUrl}/${this.botId}/messages`; // Use 'this.botId' instead of 'botId'
    const payload = {
      to: recipientMobile,
      type: 'text',
      text: {
        body: 'Welcome to swiftchat',
      },
    };

    try {
      const response = await axios.post(endpoint, payload, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async sendSwiftchatMessage(recipientMobile: string): Promise<any> {
    const url = `${this.apiUrl}/${this.botId}/messages`;
    console.log(recipientMobile);
    const messageData = {
      to: recipientMobile,
      type: 'button',
      button: {
        body: {
          type: 'text',
          text: {
            body: 'Hello, click on the button to filter the {2} class maths videos.',
          },
        },
        buttons: [
          {
            type: 'solid',
            body: 'Mathematics, Class 1',
            reply: 'Mathematics, Class 1',
          },
          {
            type: 'solid',
            body: 'Mathematics quiz, Class 1',
            reply: 'Mathematics quiz, Class 1',
          },
          {
            // icon: 'registration',
            type: 'dotted',
            body: 'Add another student',
            reply: 'Add another student',
          },
        ],
        allow_custom_response: false,
      },
    };

    try {
      const response = await axios.post(url, messageData, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
