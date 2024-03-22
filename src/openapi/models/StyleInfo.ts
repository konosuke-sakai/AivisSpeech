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
 * スタイルの追加情報
 * @export
 * @interface StyleInfo
 */
export interface StyleInfo {
    /**
     * 
     * @type {number}
     * @memberof StyleInfo
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StyleInfo
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof StyleInfo
     */
    portrait?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof StyleInfo
     */
    voiceSamples: Array<string>;
}

/**
 * Check if a given object implements the StyleInfo interface.
 */
export function instanceOfStyleInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "voiceSamples" in value;

    return isInstance;
}

export function StyleInfoFromJSON(json: any): StyleInfo {
    return StyleInfoFromJSONTyped(json, false);
}

export function StyleInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StyleInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'icon': json['icon'],
        'portrait': !exists(json, 'portrait') ? undefined : json['portrait'],
        'voiceSamples': json['voice_samples'],
    };
}

export function StyleInfoToJSON(value?: StyleInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'icon': value.icon,
        'portrait': value.portrait,
        'voice_samples': value.voiceSamples,
    };
}

