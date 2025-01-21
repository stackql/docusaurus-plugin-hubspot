import {Joi} from '@docusaurus/utils-validation';
import type {
    OptionValidationContext,
    ThemeConfig,
    ThemeConfigValidationContext,
  } from '@docusaurus/types';

export type PluginOptions = {
    accountId: number,
    async: boolean,
    defer: boolean,
};

export type Options = {
    accountId: number,
    async?: boolean,
    defer?: boolean,
  };

export const DEFAULT_OPTIONS: Partial<PluginOptions> = {
    async: false,
    defer: false
};

const pluginOptionsSchema = Joi.object<PluginOptions>({
// We normalize trackingID as a string[]
accountId: Joi.alternatives()
    .try(
    Joi.alternatives().conditional(Joi.number().required(), {
        then: Joi.custom((val: boolean) => [val]),
    }),
    Joi.array().items(Joi.number().required()),
    )
    .required(),
    async: Joi.boolean().default(DEFAULT_OPTIONS.async),
    defer: Joi.boolean().default(DEFAULT_OPTIONS.defer),
});

export function validateOptions({
validate,
options,
}: OptionValidationContext<Options, PluginOptions>): PluginOptions {
return validate(pluginOptionsSchema, options);
}

export function validateThemeConfig({
themeConfig,
}: ThemeConfigValidationContext<ThemeConfig>): ThemeConfig {
if ('hubspot' in themeConfig) {
    throw new Error(
    'The "hubspot" field in themeConfig should now be specified as option in plugins.',
    );
}
return themeConfig;
}