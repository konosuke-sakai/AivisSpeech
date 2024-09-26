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

import { exists, mapValues } from '../runtime';
/**
 * 音素の情報
 * @export
 * @interface FramePhoneme
 */
export interface FramePhoneme {
    /**
     * 音素
     * @type {string}
     * @memberof FramePhoneme
     */
    phoneme: string;
    /**
     * 音素のフレーム長
     * @type {number}
     * @memberof FramePhoneme
     */
    frameLength: number;
    /**
     * 
     * @type {string}
     * @memberof FramePhoneme
     */
    noteId?: string | null;
}

/**
 * Check if a given object implements the FramePhoneme interface.
 */
export function instanceOfFramePhoneme(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "phoneme" in value;
    isInstance = isInstance && "frameLength" in value;

    return isInstance;
}

export function FramePhonemeFromJSON(json: any): FramePhoneme {
    return FramePhonemeFromJSONTyped(json, false);
}

export function FramePhonemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FramePhoneme {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'phoneme': json['phoneme'],
        'frameLength': json['frame_length'],
        'noteId': !exists(json, 'note_id') ? undefined : json['note_id'],
    };
}

export function FramePhonemeToJSON(value?: FramePhoneme | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'phoneme': value.phoneme,
        'frame_length': value.frameLength,
        'note_id': value.noteId,
    };
}

