/* tslint:disable */
/* eslint-disable */
/**
 * AivisSpeech Engine
 * AivisSpeech の音声合成エンジンです。
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const SpeakerSupportPermittedSynthesisMorphing = {
    All: 'ALL',
    SelfOnly: 'SELF_ONLY',
    Nothing: 'NOTHING'
} as const;
export type SpeakerSupportPermittedSynthesisMorphing = typeof SpeakerSupportPermittedSynthesisMorphing[keyof typeof SpeakerSupportPermittedSynthesisMorphing];


export function SpeakerSupportPermittedSynthesisMorphingFromJSON(json: any): SpeakerSupportPermittedSynthesisMorphing {
    return SpeakerSupportPermittedSynthesisMorphingFromJSONTyped(json, false);
}

export function SpeakerSupportPermittedSynthesisMorphingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpeakerSupportPermittedSynthesisMorphing {
    return json as SpeakerSupportPermittedSynthesisMorphing;
}

export function SpeakerSupportPermittedSynthesisMorphingToJSON(value?: SpeakerSupportPermittedSynthesisMorphing | null): any {
    return value as any;
}

