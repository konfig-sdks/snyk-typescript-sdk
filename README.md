<div align="left">

[![Visit Snyk](./header.png)](https://docs.snyk.io&#x2F;snyk-api&#x2F;snyk-rest-api-overview)

# [Snyk](https://docs.snyk.io&#x2F;snyk-api&#x2F;snyk-rest-api-overview)<a id="snyk"></a>

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`snyk.apps.byInstallId`](#snykappsbyinstallid)
  * [`snyk.apps.createInstallSecret`](#snykappscreateinstallsecret)
  * [`snyk.apps.createNewAppForOrganization`](#snykappscreatenewappfororganization)
  * [`snyk.apps.createOrganizationApp`](#snykappscreateorganizationapp)
  * [`snyk.apps.deleteAppById`](#snykappsdeleteappbyid)
  * [`snyk.apps.deleteByAppId`](#snykappsdeletebyappid)
  * [`snyk.apps.getActiveSessions`](#snykappsgetactivesessions)
  * [`snyk.apps.getByAppId`](#snykappsgetbyappid)
  * [`snyk.apps.getByClientId`](#snykappsgetbyclientid)
  * [`snyk.apps.installGroupApp`](#snykappsinstallgroupapp)
  * [`snyk.apps.installSnykAppToOrg`](#snykappsinstallsnykapptoorg)
  * [`snyk.apps.listAppBots`](#snykappslistappbots)
  * [`snyk.apps.listApps`](#snykappslistapps)
  * [`snyk.apps.listGroupAppInstalls`](#snykappslistgroupappinstalls)
  * [`snyk.apps.listOrgApps`](#snykappslistorgapps)
  * [`snyk.apps.listOrgCreations`](#snykappslistorgcreations)
  * [`snyk.apps.listOrgInstalls`](#snykappslistorginstalls)
  * [`snyk.apps.listUserInstalledApps`](#snykappslistuserinstalledapps)
  * [`snyk.apps.manageClientSecretForSnykApp`](#snykappsmanageclientsecretforsnykapp)
  * [`snyk.apps.manageClientSecretForSnykApp_0`](#snykappsmanageclientsecretforsnykapp_0)
  * [`snyk.apps.manageClientSecrets`](#snykappsmanageclientsecrets)
  * [`snyk.apps.revokeAppById`](#snykappsrevokeappbyid)
  * [`snyk.apps.revokeBotAuthorization`](#snykappsrevokebotauthorization)
  * [`snyk.apps.revokeByInstallId`](#snykappsrevokebyinstallid)
  * [`snyk.apps.revokeGroupAppInstall`](#snykappsrevokegroupappinstall)
  * [`snyk.apps.revokeUserAppSession`](#snykappsrevokeuserappsession)
  * [`snyk.apps.updateAttributes`](#snykappsupdateattributes)
  * [`snyk.apps.updateCreationAttributesById`](#snykappsupdatecreationattributesbyid)
  * [`snyk.auditLogs.searchGroupAuditLogs`](#snykauditlogssearchgroupauditlogs)
  * [`snyk.auditLogs.searchOrganizationAuditLogs`](#snykauditlogssearchorganizationauditlogs)
  * [`snyk.collection.addProjectsTo`](#snykcollectionaddprojectsto)
  * [`snyk.collection.createNew`](#snykcollectioncreatenew)
  * [`snyk.collection.editCollection`](#snykcollectioneditcollection)
  * [`snyk.collection.getById`](#snykcollectiongetbyid)
  * [`snyk.collection.getList`](#snykcollectiongetlist)
  * [`snyk.collection.getProjects`](#snykcollectiongetprojects)
  * [`snyk.collection.removeById`](#snykcollectionremovebyid)
  * [`snyk.collection.removeProjects`](#snykcollectionremoveprojects)
  * [`snyk.containerImage.getInstance`](#snykcontainerimagegetinstance)
  * [`snyk.containerImage.listImageTargetRefs`](#snykcontainerimagelistimagetargetrefs)
  * [`snyk.containerImage.listInstancesOfContainerImage`](#snykcontainerimagelistinstancesofcontainerimage)
  * [`snyk.customBaseImages.getById`](#snykcustombaseimagesgetbyid)
  * [`snyk.customBaseImages.list`](#snykcustombaseimageslist)
  * [`snyk.customBaseImages.markImageAsCustomBase`](#snykcustombaseimagesmarkimageascustombase)
  * [`snyk.customBaseImages.removeCustomBaseImage`](#snykcustombaseimagesremovecustombaseimage)
  * [`snyk.customBaseImages.updateAttributes`](#snykcustombaseimagesupdateattributes)
  * [`snyk.iacSettings.getForGroup`](#snykiacsettingsgetforgroup)
  * [`snyk.iacSettings.getForOrgIac`](#snykiacsettingsgetfororgiac)
  * [`snyk.iacSettings.updateForGroup`](#snykiacsettingsupdateforgroup)
  * [`snyk.iacSettings.updateForOrg`](#snykiacsettingsupdatefororg)
  * [`snyk.invites.cancelPendingInvitation`](#snykinvitescancelpendinginvitation)
  * [`snyk.invites.listPendingUserInvitations`](#snykinviteslistpendinguserinvitations)
  * [`snyk.invites.userToOrganization`](#snykinvitesusertoorganization)
  * [`snyk.issues.byGroupId`](#snykissuesbygroupid)
  * [`snyk.issues.getById`](#snykissuesgetbyid)
  * [`snyk.issues.getByIssueId`](#snykissuesgetbyissueid)
  * [`snyk.issues.listByOrgId`](#snykissueslistbyorgid)
  * [`snyk.issues.listByPackage`](#snykissueslistbypackage)
  * [`snyk.issues.queryForPackages`](#snykissuesqueryforpackages)
  * [`snyk.openAPI.getEffectiveVersion`](#snykopenapigeteffectiveversion)
  * [`snyk.openAPI.listAvailableVersions`](#snykopenapilistavailableversions)
  * [`snyk.orgs.getDetails`](#snykorgsgetdetails)
  * [`snyk.orgs.listAccessibleOrganizations`](#snykorgslistaccessibleorganizations)
  * [`snyk.orgs.listGroupOrgs`](#snykorgslistgrouporgs)
  * [`snyk.orgs.updateDetails`](#snykorgsupdatedetails)
  * [`snyk.projects.deleteByProjectId`](#snykprojectsdeletebyprojectid)
  * [`snyk.projects.getByProjectId`](#snykprojectsgetbyprojectid)
  * [`snyk.projects.listForOrg`](#snykprojectslistfororg)
  * [`snyk.projects.updateByProjectId`](#snykprojectsupdatebyprojectid)
  * [`snyk.sBOM.getProjectDocument`](#snyksbomgetprojectdocument)
  * [`snyk.sastSettings.getForOrg`](#snyksastsettingsgetfororg)
  * [`snyk.sastSettings.toggleSnykCodeSettings`](#snyksastsettingstogglesnykcodesettings)
  * [`snyk.serviceAccounts.createForOrganization`](#snykserviceaccountscreatefororganization)
  * [`snyk.serviceAccounts.createGroup`](#snykserviceaccountscreategroup)
  * [`snyk.serviceAccounts.deleteGroupServiceAccount`](#snykserviceaccountsdeletegroupserviceaccount)
  * [`snyk.serviceAccounts.deleteOrgServiceAccount`](#snykserviceaccountsdeleteorgserviceaccount)
  * [`snyk.serviceAccounts.getGroupServiceAccount`](#snykserviceaccountsgetgroupserviceaccount)
  * [`snyk.serviceAccounts.getOrganizationAccountById`](#snykserviceaccountsgetorganizationaccountbyid)
  * [`snyk.serviceAccounts.listGroupServiceAccounts`](#snykserviceaccountslistgroupserviceaccounts)
  * [`snyk.serviceAccounts.listOrganizationServiceAccounts`](#snykserviceaccountslistorganizationserviceaccounts)
  * [`snyk.serviceAccounts.manageClientSecret`](#snykserviceaccountsmanageclientsecret)
  * [`snyk.serviceAccounts.manageClientSecretForOrganizationServiceAccount`](#snykserviceaccountsmanageclientsecretfororganizationserviceaccount)
  * [`snyk.serviceAccounts.updateGroupNameById`](#snykserviceaccountsupdategroupnamebyid)
  * [`snyk.serviceAccounts.updateOrganizationServiceAccountName`](#snykserviceaccountsupdateorganizationserviceaccountname)
  * [`snyk.slack.getChannelNameById`](#snykslackgetchannelnamebyid)
  * [`snyk.slack.getChannels`](#snykslackgetchannels)
  * [`snyk.slackSettings.createDefaultNotificationSettings`](#snykslacksettingscreatedefaultnotificationsettings)
  * [`snyk.slackSettings.getDefaultNotificationSettings`](#snykslacksettingsgetdefaultnotificationsettings)
  * [`snyk.slackSettings.getOverridesForProjects`](#snykslacksettingsgetoverridesforprojects)
  * [`snyk.slackSettings.projectOverride`](#snykslacksettingsprojectoverride)
  * [`snyk.slackSettings.removeIntegration`](#snykslacksettingsremoveintegration)
  * [`snyk.slackSettings.removeProjectOverride`](#snykslacksettingsremoveprojectoverride)
  * [`snyk.slackSettings.updateNotificationSettingsForProject`](#snykslacksettingsupdatenotificationsettingsforproject)
  * [`snyk.targets.deleteById`](#snyktargetsdeletebyid)
  * [`snyk.targets.getById`](#snyktargetsgetbyid)
  * [`snyk.targets.listByOrgId`](#snyktargetslistbyorgid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Snyk&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Snyk } from "snyk-typescript-sdk";

const snyk = new Snyk({
  // Defining the base path is optional and defaults to https://api.snyk.io/rest
  // basePath: "https://api.snyk.io/rest",
  apiKey: "API_KEY",
  accessToken: "ACCESS_TOKEN",
});

const byInstallIdResponse = await snyk.apps.byInstallId({
  version: "wip",
  orgId: "orgId_example",
  installId: "installId_example",
});

console.log(byInstallIdResponse);
```

## Reference<a id="reference"></a>


### `snyk.apps.byInstallId`<a id="snykappsbyinstallid"></a>

Revoke app authorization for an Snyk Organization with install ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const byInstallIdResponse = await snyk.apps.byInstallId({
  version: "wip",
  orgId: "orgId_example",
  installId: "installId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### installId: `string`<a id="installid-string"></a>

Install ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/installs/{install_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.createInstallSecret`<a id="snykappscreateinstallsecret"></a>

Manage client secret for non-interactive Snyk App installations.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInstallSecretResponse = await snyk.apps.createInstallSecret({
  version: "wip",
  groupId: "groupId_example",
  installId: "installId_example",
  data: {
    attributes: {
      mode: "replace",
    },
    type: "app",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AppsCreateInstallSecretRequestData`](./models/apps-create-install-secret-request-data.ts)<a id="data-appscreateinstallsecretrequestdatamodelsapps-create-install-secret-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### groupId: `string`<a id="groupid-string"></a>

Group ID

##### installId: `string`<a id="installid-string"></a>

Install ID

#### 🔄 Return<a id="🔄-return"></a>

[AppsCreateInstallSecretResponse](./models/apps-create-install-secret-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/apps/installs/{install_id}/secrets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.createNewAppForOrganization`<a id="snykappscreatenewappfororganization"></a>

Create a new Snyk App for an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAppForOrganizationResponse =
  await snyk.apps.createNewAppForOrganization({
    version: "wip",
    orgId: "orgId_example",
    data: {
      attributes: {
        access_token_ttl_seconds: 3600,
        context: "tenant",
        name: "My App",
        redirect_uris: ["https://example.com/callback"],
        scopes: ["scopes_example"],
      },
      type: "app",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AppPostRequestData`](./models/app-post-request-data.ts)<a id="data-apppostrequestdatamodelsapp-post-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

#### 🔄 Return<a id="🔄-return"></a>

[AppPostResponse](./models/app-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/creations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.createOrganizationApp`<a id="snykappscreateorganizationapp"></a>

Create a new app for an organization. Deprecated, use /orgs/{org_id}/apps/creations instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrganizationAppResponse = await snyk.apps.createOrganizationApp({
  version: "wip",
  orgId: "orgId_example",
  data: {
    attributes: {
      access_token_ttl_seconds: 3600,
      context: "tenant",
      name: "My App",
      redirect_uris: ["https://example.com/callback"],
      scopes: ["scopes_example"],
    },
    type: "app",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AppPostRequestData`](./models/app-post-request-data.ts)<a id="data-apppostrequestdatamodelsapp-post-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

#### 🔄 Return<a id="🔄-return"></a>

[AppPostResponse](./models/app-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.deleteAppById`<a id="snykappsdeleteappbyid"></a>

Delete an app by app id. Deprecated, use /orgs/{org_id}/apps/creations/{app_id} instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAppByIdResponse = await snyk.apps.deleteAppById({
  version: "wip",
  orgId: "orgId_example",
  clientId: "clientId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### clientId: `string`<a id="clientid-string"></a>

Client ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/{client_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.deleteByAppId`<a id="snykappsdeletebyappid"></a>

Delete an app by its App ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByAppIdResponse = await snyk.apps.deleteByAppId({
  orgId: "orgId_example",
  appId: "appId_example",
  version: "wip",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### appId: `string`<a id="appid-string"></a>

App ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/creations/{app_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.getActiveSessions`<a id="snykappsgetactivesessions"></a>

Get a list of active OAuth sessions for the app.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getActiveSessionsResponse = await snyk.apps.getActiveSessions({
  version: "wip",
  limit: 10,
  appId: "appId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### appId: `string`<a id="appid-string"></a>

App ID

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[AppsGetActiveSessionsResponse](./models/apps-get-active-sessions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/self/apps/{app_id}/sessions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.getByAppId`<a id="snykappsgetbyappid"></a>

Get a Snyk App by its App ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAppIdResponse = await snyk.apps.getByAppId({
  orgId: "orgId_example",
  appId: "appId_example",
  version: "wip",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### appId: `string`<a id="appid-string"></a>

App ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[AppsGetByAppIdResponse](./models/apps-get-by-app-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/creations/{app_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.getByClientId`<a id="snykappsgetbyclientid"></a>

Get an App by client id. Deprecated, use /orgs/{org_id}/apps/creations/{app_id} instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByClientIdResponse = await snyk.apps.getByClientId({
  orgId: "orgId_example",
  clientId: "clientId_example",
  version: "wip",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### clientId: `string`<a id="clientid-string"></a>

Client ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[AppsGetByClientIdResponse](./models/apps-get-by-client-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/{client_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.installGroupApp`<a id="snykappsinstallgroupapp"></a>

Install a Snyk Apps to this group, the Snyk App must use unattended authentication eg client credentials.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const installGroupAppResponse = await snyk.apps.installGroupApp({
  version: "wip",
  groupId: "groupId_example",
  data: {
    type: "app_install",
  },
  relationships: {
    app: {
      data: {
        id: "id_example",
        type: "app",
      },
    },
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AppsInstallGroupAppRequestData`](./models/apps-install-group-app-request-data.ts)<a id="data-appsinstallgroupapprequestdatamodelsapps-install-group-app-request-datats"></a>

##### relationships: [`AppsInstallGroupAppRequestRelationships`](./models/apps-install-group-app-request-relationships.ts)<a id="relationships-appsinstallgroupapprequestrelationshipsmodelsapps-install-group-app-request-relationshipsts"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### groupId: `string`<a id="groupid-string"></a>

Group ID

#### 🔄 Return<a id="🔄-return"></a>

[AppsInstallGroupAppResponse](./models/apps-install-group-app-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/apps/installs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.installSnykAppToOrg`<a id="snykappsinstallsnykapptoorg"></a>

Install a Snyk Apps to this organization, the Snyk App must use unattended authentication eg client credentials.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const installSnykAppToOrgResponse = await snyk.apps.installSnykAppToOrg({
  version: "wip",
  orgId: "orgId_example",
  data: {
    type: "app_install",
  },
  relationships: {
    app: {
      data: {
        id: "id_example",
        type: "app",
      },
    },
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AppsInstallSnykAppToOrgRequestData`](./models/apps-install-snyk-app-to-org-request-data.ts)<a id="data-appsinstallsnykapptoorgrequestdatamodelsapps-install-snyk-app-to-org-request-datats"></a>

##### relationships: [`AppsInstallSnykAppToOrgRequestRelationships`](./models/apps-install-snyk-app-to-org-request-relationships.ts)<a id="relationships-appsinstallsnykapptoorgrequestrelationshipsmodelsapps-install-snyk-app-to-org-request-relationshipsts"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

#### 🔄 Return<a id="🔄-return"></a>

[AppsInstallSnykAppToOrgResponse](./models/apps-install-snyk-app-to-org-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/installs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.listAppBots`<a id="snykappslistappbots"></a>

Get a list of app bots authorized to an organization. Deprecated, use /orgs/{org_id}/apps/installs instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAppBotsResponse = await snyk.apps.listAppBots({
  orgId: "orgId_example",
  version: "wip",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### expand: `string`[]<a id="expand-string"></a>

Expand relationships.

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[AppsListAppBotsResponse](./models/apps-list-app-bots-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/app_bots` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.listApps`<a id="snykappslistapps"></a>

Get a list of apps that can act on your behalf.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAppsResponse = await snyk.apps.listApps({
  version: "wip",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[AppsListAppsResponse](./models/apps-list-apps-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/self/apps` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.listGroupAppInstalls`<a id="snykappslistgroupappinstalls"></a>

Get a list of apps installed for a group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGroupAppInstallsResponse = await snyk.apps.listGroupAppInstalls({
  groupId: "groupId_example",
  version: "wip",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>

Group ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### expand: `string`[]<a id="expand-string"></a>

Expand relationships.

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[AppsListGroupAppInstallsResponse](./models/apps-list-group-app-installs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/apps/installs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.listOrgApps`<a id="snykappslistorgapps"></a>

Get a list of apps created by an organization. Deprecated, use /orgs/{org_id}/apps/creations instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOrgAppsResponse = await snyk.apps.listOrgApps({
  orgId: "orgId_example",
  version: "wip",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[AppsListOrgAppsResponse](./models/apps-list-org-apps-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.listOrgCreations`<a id="snykappslistorgcreations"></a>

Get a list of apps created by an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOrgCreationsResponse = await snyk.apps.listOrgCreations({
  orgId: "orgId_example",
  version: "wip",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[AppsListOrgCreationsResponse](./models/apps-list-org-creations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/creations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.listOrgInstalls`<a id="snykappslistorginstalls"></a>

Get a list of apps installed for an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOrgInstallsResponse = await snyk.apps.listOrgInstalls({
  orgId: "orgId_example",
  version: "wip",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### expand: `string`[]<a id="expand-string"></a>

Expand relationships.

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[AppsListOrgInstallsResponse](./models/apps-list-org-installs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/installs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.listUserInstalledApps`<a id="snykappslistuserinstalledapps"></a>

Get a list of apps installed for an user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserInstalledAppsResponse = await snyk.apps.listUserInstalledApps({
  version: "wip",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### expand: `string`[]<a id="expand-string"></a>

Expand relationships.

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[AppsListUserInstalledAppsResponse](./models/apps-list-user-installed-apps-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/self/apps/installs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.manageClientSecretForSnykApp`<a id="snykappsmanageclientsecretforsnykapp"></a>

Manage client secret for the Snyk App.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const manageClientSecretForSnykAppResponse =
  await snyk.apps.manageClientSecretForSnykApp({
    version: "wip",
    orgId: "orgId_example",
    appId: "appId_example",
    data: {
      attributes: {
        mode: "replace",
      },
      type: "app",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AppsCreateInstallSecretRequestData`](./models/apps-create-install-secret-request-data.ts)<a id="data-appscreateinstallsecretrequestdatamodelsapps-create-install-secret-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### appId: `string`<a id="appid-string"></a>

App ID

#### 🔄 Return<a id="🔄-return"></a>

[AppsManageClientSecretForSnykAppResponse](./models/apps-manage-client-secret-for-snyk-app-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/creations/{app_id}/secrets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.manageClientSecretForSnykApp_0`<a id="snykappsmanageclientsecretforsnykapp_0"></a>

Manage client secret for non-interactive Snyk App installations.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const manageClientSecretForSnykApp_0Response =
  await snyk.apps.manageClientSecretForSnykApp_0({
    version: "wip",
    orgId: "orgId_example",
    installId: "installId_example",
    data: {
      attributes: {
        mode: "replace",
      },
      type: "app",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AppsCreateInstallSecretRequestData`](./models/apps-create-install-secret-request-data.ts)<a id="data-appscreateinstallsecretrequestdatamodelsapps-create-install-secret-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### installId: `string`<a id="installid-string"></a>

Install ID

#### 🔄 Return<a id="🔄-return"></a>

[AppsManageClientSecretForSnykApp200Response](./models/apps-manage-client-secret-for-snyk-app200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/installs/{install_id}/secrets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.manageClientSecrets`<a id="snykappsmanageclientsecrets"></a>

Manage client secrets for an app. Deprecated, use /orgs/{org_id}/apps/creations/{app_id}/secrets instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const manageClientSecretsResponse = await snyk.apps.manageClientSecrets({
  version: "wip",
  orgId: "orgId_example",
  clientId: "clientId_example",
  mode: "replace",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### mode: `string`<a id="mode-string"></a>

Operation to perform:   * `replace` - Replace existing secrets with a new generated secret   * `create` - Add a new secret, preserving existing secrets   * `delete` - Remove an existing secret by value 

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### clientId: `string`<a id="clientid-string"></a>

Client ID

##### secret: `string`<a id="secret-string"></a>

Secret to delete when using `delete` mode

#### 🔄 Return<a id="🔄-return"></a>

[AppsManageClientSecretsResponse](./models/apps-manage-client-secrets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/{client_id}/secrets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.revokeAppById`<a id="snykappsrevokeappbyid"></a>

Revoke access for an app by app id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokeAppByIdResponse = await snyk.apps.revokeAppById({
  version: "wip",
  appId: "appId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### appId: `string`<a id="appid-string"></a>

App ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/self/apps/{app_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.revokeBotAuthorization`<a id="snykappsrevokebotauthorization"></a>

Revoke app bot authorization. Deprecated, use /orgs/{org_id}/apps/installs/{install_id} instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokeBotAuthorizationResponse = await snyk.apps.revokeBotAuthorization({
  botId: "botId_example",
  version: "wip",
  orgId: "orgId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### botId: `string`<a id="botid-string"></a>

The ID of the app bot

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/app_bots/{bot_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.revokeByInstallId`<a id="snykappsrevokebyinstallid"></a>

Revoke access for an app by install ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokeByInstallIdResponse = await snyk.apps.revokeByInstallId({
  version: "wip",
  installId: "installId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### installId: `string`<a id="installid-string"></a>

Install ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/self/apps/installs/{install_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.revokeGroupAppInstall`<a id="snykappsrevokegroupappinstall"></a>

Revoke app authorization for an Snyk Group with install ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokeGroupAppInstallResponse = await snyk.apps.revokeGroupAppInstall({
  version: "wip",
  groupId: "groupId_example",
  installId: "installId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### groupId: `string`<a id="groupid-string"></a>

Group ID

##### installId: `string`<a id="installid-string"></a>

Install ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/apps/installs/{install_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.revokeUserAppSession`<a id="snykappsrevokeuserappsession"></a>

Revoke an active user app session.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokeUserAppSessionResponse = await snyk.apps.revokeUserAppSession({
  version: "wip",
  appId: "appId_example",
  sessionId: "sessionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### appId: `string`<a id="appid-string"></a>

App ID

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/self/apps/{app_id}/sessions/{session_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.updateAttributes`<a id="snykappsupdateattributes"></a>

Update app attributes. Deprecated, use /orgs/{org_id}/apps/creations/{app_id} instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAttributesResponse = await snyk.apps.updateAttributes({
  version: "wip",
  orgId: "orgId_example",
  clientId: "clientId_example",
  data: {
    type: "app",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AppPatchRequestData`](./models/app-patch-request-data.ts)<a id="data-apppatchrequestdatamodelsapp-patch-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### clientId: `string`<a id="clientid-string"></a>

Client ID

#### 🔄 Return<a id="🔄-return"></a>

[AppsUpdateAttributesResponse](./models/apps-update-attributes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/{client_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.apps.updateCreationAttributesById`<a id="snykappsupdatecreationattributesbyid"></a>

Update app creation attributes with App ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCreationAttributesByIdResponse =
  await snyk.apps.updateCreationAttributesById({
    version: "wip",
    orgId: "orgId_example",
    appId: "appId_example",
    data: {
      type: "app",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AppPatchRequestData`](./models/app-patch-request-data.ts)<a id="data-apppatchrequestdatamodelsapp-patch-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### appId: `string`<a id="appid-string"></a>

App ID

#### 🔄 Return<a id="🔄-return"></a>

[AppsUpdateCreationAttributesByIdResponse](./models/apps-update-creation-attributes-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/apps/creations/{app_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.auditLogs.searchGroupAuditLogs`<a id="snykauditlogssearchgroupauditlogs"></a>

Search audit logs for a Group. Some Organization level events are supported as well as the following
Group level events:
  - api.access
  - group.cloud_config.settings.edit
  - group.create
  - group.delete
  - group.edit
  - group.notification_settings.edit
  - group.org.add
  - group.org.remove
  - group.policy.create
  - group.policy.delete
  - group.policy.edit
  - group.request_access_settings.edit
  - group.role.create
  - group.role.delete
  - group.role.edit
  - group.service_account.create
  - group.service_account.delete
  - group.service_account.edit
  - group.settings.edit
  - group.settings.feature_flag.edit
  - group.sso.add
  - group.sso.auth0_connection.create
  - group.sso.auth0_connection.edit
  - group.sso.create
  - group.sso.delete
  - group.sso.edit
  - group.sso.membership.sync
  - group.sso.remove
  - group.tag.create
  - group.tag.delete
  - group.user.add
  - group.user.remove
  - group.user.role.edit


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchGroupAuditLogsResponse = await snyk.auditLogs.searchGroupAuditLogs({
  version: "wip",
  groupId: "groupId_example",
  sortOrder: "DESC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### groupId: `string`<a id="groupid-string"></a>

The ID of the Group.

##### cursor: `string`<a id="cursor-string"></a>

The ID for the next page of results.

##### from: `string | Date`<a id="from-string--date"></a>

The start date (inclusive) of the audit logs search. If this is not specified, the start of yesterday is used. Example: 2023-07-27 

##### to: `string | Date`<a id="to-string--date"></a>

The end date (inclusive) of the audit logs search. Example: 2023-07-27 

##### size: `number`<a id="size-number"></a>

Number of results to return per page.

##### sortOrder: `'ASC' | 'DESC'`<a id="sortorder-asc--desc"></a>

Order in which results are returned.

##### userId: `string`<a id="userid-string"></a>

Filter logs by user ID.

##### projectId: `string`<a id="projectid-string"></a>

Filter logs by project ID.

##### event: `string`<a id="event-string"></a>

Filter logs by event type, cannot be used in conjunction with exclude_event parameter.

##### excludeEvent: `string`<a id="excludeevent-string"></a>

Exclude event type from results, cannot be used in conjunctions with event parameter.

#### 🔄 Return<a id="🔄-return"></a>

[AuditLogsSearchGroupAuditLogsResponse](./models/audit-logs-search-group-audit-logs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/audit_logs/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.auditLogs.searchOrganizationAuditLogs`<a id="snykauditlogssearchorganizationauditlogs"></a>

Search audit logs for an Organization. Supported event types:
  - api.access
  - org.app_bot.create
  - org.app.create
  - org.app.delete
  - org.app.edit
  - org.cloud_config.settings.edit
  - org.collection.create
  - org.collection.delete
  - org.collection.edit
  - org.create
  - org.delete
  - org.edit
  - org.ignore_policy.edit
  - org.integration.create
  - org.integration.delete
  - org.integration.edit
  - org.integration.settings.edit
  - org.language_settings.edit
  - org.notification_settings.edit
  - org.org_source.create
  - org.org_source.delete
  - org.org_source.edit
  - org.policy.edit
  - org.project_filter.create
  - org.project_filter.delete
  - org.project.add
  - org.project.attributes.edit
  - org.project.delete
  - org.project.edit
  - org.project.fix_pr.auto_open
  - org.project.fix_pr.manual_open
  - org.project.ignore.create
  - org.project.ignore.delete
  - org.project.ignore.edit
  - org.project.monitor
  - org.project.pr_check.edit
  - org.project.remove
  - org.project.settings.delete
  - org.project.settings.edit
  - org.project.stop_monitor
  - org.project.tag.add
  - org.project.tag.remove
  - org.project.test
  - org.request_access_settings.edit
  - org.sast_settings.edit
  - org.service_account.create
  - org.service_account.delete
  - org.service_account.edit
  - org.settings.feature_flag.edit
  - org.target.create
  - org.target.delete
  - org.user.add
  - org.user.invite
  - org.user.invite.accept
  - org.user.invite.revoke
  - org.user.invite_link.accept
  - org.user.invite_link.create
  - org.user.invite_link.revoke
  - org.user.leave
  - org.user.provision.accept
  - org.user.provision.create
  - org.user.provision.delete
  - org.user.remove
  - org.user.role.create
  - org.user.role.delete
  - org.user.role.details.edit
  - org.user.role.edit
  - org.user.role.permissions.edit
  - org.webhook.add
  - org.webhook.delete
  - user.org.notification_settings.edit


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchOrganizationAuditLogsResponse =
  await snyk.auditLogs.searchOrganizationAuditLogs({
    version: "wip",
    orgId: "orgId_example",
    sortOrder: "DESC",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The ID of the organization.

##### cursor: `string`<a id="cursor-string"></a>

The ID for the next page of results.

##### from: `string | Date`<a id="from-string--date"></a>

The start date (inclusive) of the audit logs search. If this is not specified, the start of yesterday is used. Example: 2023-07-27 

##### to: `string | Date`<a id="to-string--date"></a>

The end date (inclusive) of the audit logs search. Example: 2023-07-27 

##### size: `number`<a id="size-number"></a>

Number of results to return per page.

##### sortOrder: `'ASC' | 'DESC'`<a id="sortorder-asc--desc"></a>

Order in which results are returned.

##### userId: `string`<a id="userid-string"></a>

Filter logs by user ID.

##### projectId: `string`<a id="projectid-string"></a>

Filter logs by project ID.

##### event: `string`<a id="event-string"></a>

Filter logs by event type, cannot be used in conjunction with exclude_event parameter.

##### excludeEvent: `string`<a id="excludeevent-string"></a>

Exclude event type from results, cannot be used in conjunctions with event parameter.

#### 🔄 Return<a id="🔄-return"></a>

[AuditLogsSearchOrganizationAuditLogsResponse](./models/audit-logs-search-organization-audit-logs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/audit_logs/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.collection.addProjectsTo`<a id="snykcollectionaddprojectsto"></a>

Add projects to a collection by specifying an array of either project ids or target ids (for targets, the respective projects will be added, but they won't be updated when the target changes)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addProjectsToResponse = await snyk.collection.addProjectsTo({
  version: "wip",
  orgId: "orgId_example",
  collectionId: "collectionId_example",
  data: [
    {
      id: "id_example",
      type: "project",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`DeleteProjectsFromCollectionRequestDataInner`](./models/delete-projects-from-collection-request-data-inner.ts)[]<a id="data-deleteprojectsfromcollectionrequestdatainnermodelsdelete-projects-from-collection-request-data-innerts"></a>

IDs of items to add to a collection

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### collectionId: `string`<a id="collectionid-string"></a>

Unique identifier for a collection

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/collections/{collection_id}/relationships/projects` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.collection.createNew`<a id="snykcollectioncreatenew"></a>

Create a collection

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewResponse = await snyk.collection.createNew({
  version: "wip",
  orgId: "orgId_example",
  data: {
    attributes: {
      name: "g",
    },
    type: "resource",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`CreateCollectionRequestData`](./models/create-collection-request-data.ts)<a id="data-createcollectionrequestdatamodelscreate-collection-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

#### 🔄 Return<a id="🔄-return"></a>

[CollectionCreateNewResponse](./models/collection-create-new-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/collections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.collection.editCollection`<a id="snykcollectioneditcollection"></a>

Edit a collection

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editCollectionResponse = await snyk.collection.editCollection({
  version: "wip",
  orgId: "orgId_example",
  collectionId: "collectionId_example",
  data: {
    attributes: {
      name: "g",
    },
    type: "resource",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`UpdateCollectionRequestData`](./models/update-collection-request-data.ts)<a id="data-updatecollectionrequestdatamodelsupdate-collection-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### collectionId: `string`<a id="collectionid-string"></a>

Unique identifier for a collection

#### 🔄 Return<a id="🔄-return"></a>

[CollectionEditCollectionResponse](./models/collection-edit-collection-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/collections/{collection_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.collection.getById`<a id="snykcollectiongetbyid"></a>

Get a collection

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await snyk.collection.getById({
  version: "wip",
  orgId: "orgId_example",
  collectionId: "collectionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### collectionId: `string`<a id="collectionid-string"></a>

Unique identifier for a collection

#### 🔄 Return<a id="🔄-return"></a>

[CollectionGetByIdResponse](./models/collection-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/collections/{collection_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.collection.getList`<a id="snykcollectiongetlist"></a>

Return a list of organization's collections with issues counts  and projects count.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await snyk.collection.getList({
  version: "wip",
  orgId: "orgId_example",
  limit: 10,
  sort: "name",
  direction: "DESC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### sort: `'name' | 'projectsCount' | 'issues'`<a id="sort-name--projectscount--issues"></a>

Return collections sorted by the specified attributes

##### direction: `'ASC' | 'DESC'`<a id="direction-asc--desc"></a>

Return collections sorted in the specified direction

##### name: `string`<a id="name-string"></a>

Return collections which names include the provided string

##### isGenerated: `boolean`<a id="isgenerated-boolean"></a>

Return collections where is_generated matches the provided boolean

#### 🔄 Return<a id="🔄-return"></a>

[CollectionGetListResponse](./models/collection-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.collection.getProjects`<a id="snykcollectiongetprojects"></a>

Return a list of organization's projects that are from the specified collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectsResponse = await snyk.collection.getProjects({
  version: "wip",
  orgId: "orgId_example",
  collectionId: "collectionId_example",
  limit: 10,
  sort: "imported",
  direction: "DESC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### collectionId: `string`<a id="collectionid-string"></a>

Unique identifier for a collection

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### sort: `'imported' | 'last_tested_at' | 'issues'`<a id="sort-imported--last_tested_at--issues"></a>

Return projects sorted by the specified attributes

##### direction: `'ASC' | 'DESC'`<a id="direction-asc--desc"></a>

Return projects sorted in the specified direction

##### targetId: `string`[]<a id="targetid-string"></a>

Return projects that belong to the provided targets

##### show: `string`[]<a id="show-string"></a>

Return projects that are with or without issues

##### integration: `string`[]<a id="integration-string"></a>

Return projects that match the provided integration types

#### 🔄 Return<a id="🔄-return"></a>

[GetProjectsOfCollectionResponse](./models/get-projects-of-collection-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/collections/{collection_id}/relationships/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.collection.removeById`<a id="snykcollectionremovebyid"></a>

Delete a collection

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await snyk.collection.removeById({
  version: "wip",
  orgId: "orgId_example",
  collectionId: "collectionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### collectionId: `string`<a id="collectionid-string"></a>

Unique identifier for a collection

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/collections/{collection_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.collection.removeProjects`<a id="snykcollectionremoveprojects"></a>

Remove projects from a collection by specifying an array of either project ids or target ids (for targets, the respective projects will be removed)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeProjectsResponse = await snyk.collection.removeProjects({
  version: "wip",
  orgId: "orgId_example",
  collectionId: "collectionId_example",
  data: [
    {
      id: "id_example",
      type: "project",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`DeleteProjectsFromCollectionRequestDataInner`](./models/delete-projects-from-collection-request-data-inner.ts)[]<a id="data-deleteprojectsfromcollectionrequestdatainnermodelsdelete-projects-from-collection-request-data-innerts"></a>

IDs of items to remove from a collection

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### collectionId: `string`<a id="collectionid-string"></a>

Unique identifier for a collection

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/collections/{collection_id}/relationships/projects` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.containerImage.getInstance`<a id="snykcontainerimagegetinstance"></a>

Get instance of container image

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstanceResponse = await snyk.containerImage.getInstance({
  version: "wip",
  orgId: "f59045b3-f093-40c3-871d-a334ae30c568",
  imageId:
    "sha256:2bd864580926b790a22c8b96fd74496fe87b3c59c0774fe144bab2788e78e676",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### imageId: `string`<a id="imageid-string"></a>

Image ID

#### 🔄 Return<a id="🔄-return"></a>

[ContainerImageGetInstanceResponse](./models/container-image-get-instance-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/container_images/{image_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.containerImage.listImageTargetRefs`<a id="snykcontainerimagelistimagetargetrefs"></a>

List instances of image target references for a container image

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listImageTargetRefsResponse =
  await snyk.containerImage.listImageTargetRefs({
    orgId: "f59045b3-f093-40c3-871d-a334ae30c568",
    imageId:
      "sha256:2bd864580926b790a22c8b96fd74496fe87b3c59c0774fe144bab2788e78e676",
    version: "wip",
    limit: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### imageId: `string`<a id="imageid-string"></a>

Image ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

#### 🔄 Return<a id="🔄-return"></a>

[ContainerImageListImageTargetRefsResponse](./models/container-image-list-image-target-refs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/container_images/{image_id}/relationships/image_target_refs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.containerImage.listInstancesOfContainerImage`<a id="snykcontainerimagelistinstancesofcontainerimage"></a>

List instances of container image

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInstancesOfContainerImageResponse =
  await snyk.containerImage.listInstancesOfContainerImage({
    orgId: "f59045b3-f093-40c3-871d-a334ae30c568",
    platform: "linux/amd64",
    version: "wip",
    limit: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### imageIds: `string`[]<a id="imageids-string"></a>

A comma-separated list of Image IDs

##### platform: [`Platform`](./models/platform.ts)<a id="platform-platformmodelsplatformts"></a>

The image Operating System and processor architecture

##### names: `string`[]<a id="names-string"></a>

The container registry names

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

#### 🔄 Return<a id="🔄-return"></a>

[ContainerImageListInstancesOfContainerImageResponse](./models/container-image-list-instances-of-container-image-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/container_images` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.customBaseImages.getById`<a id="snykcustombaseimagesgetbyid"></a>

Get a custom base image

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await snyk.customBaseImages.getById({
  version: "wip",
  custombaseimageId: "custombaseimageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### custombaseimageId: `string`<a id="custombaseimageid-string"></a>

Unique identifier for custom base image

#### 🔄 Return<a id="🔄-return"></a>

[CustomBaseImageResponse](./models/custom-base-image-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_base_images/{custombaseimage_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.customBaseImages.list`<a id="snykcustombaseimageslist"></a>

Get a list of custom base images with support for ordering and filtering.
Either the org_id or group_id parameters must be set to authorize successfully.
If sorting by version, the repository filter is required.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await snyk.customBaseImages.list({
  version: "wip",
  limit: 10,
  sortBy: "repository",
  sortDirection: "ASC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### projectId: `string`<a id="projectid-string"></a>

The ID of the container project that the custom base image is based off of.

##### orgId: `string`<a id="orgid-string"></a>

The organization ID of the custom base image

##### groupId: `string`<a id="groupid-string"></a>

The group ID of the custom base image

##### repository: `string`<a id="repository-string"></a>

The image repository

##### tag: `string`<a id="tag-string"></a>

The image tag

##### includeInRecommendations: `boolean`<a id="includeinrecommendations-boolean"></a>

Whether this image should be recommended as a base image upgrade

##### sortBy: `'repository' | 'tag' | 'version'`<a id="sortby-repository--tag--version"></a>

Which column to sort by.  If sorting by version, the versioning schema is used. 

##### sortDirection: `'ASC' | 'DESC'`<a id="sortdirection-asc--desc"></a>

Which direction to sort

#### 🔄 Return<a id="🔄-return"></a>

[CustomBaseImageCollectionResponse](./models/custom-base-image-collection-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_base_images` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.customBaseImages.markImageAsCustomBase`<a id="snykcustombaseimagesmarkimageascustombase"></a>

In order to create a custom base image, you first need to import your base images into Snyk.
You can do this through the CLI, UI, or API.

This endpoint marks an image as a custom base image. This means that the image will get
added to the pool of images from which Snyk can recommend base image upgrades.

Note, after the first image in a repository gets added, a versioning schema cannot be passed in this endpoint.
To update the versioning schema, the PATCH endpoint must be used.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markImageAsCustomBaseResponse =
  await snyk.customBaseImages.markImageAsCustomBase({
    version: "wip",
    data: {
      attributes: {
        include_in_recommendations: true,
        project_id: "2cab3939-d112-4ef0-836d-e09c87cbe69b",
      },
      type: "custom_base_image",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`CustomBaseImagePostRequestData`](./models/custom-base-image-post-request-data.ts)<a id="data-custombaseimagepostrequestdatamodelscustom-base-image-post-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[CustomBaseImageResponse](./models/custom-base-image-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_base_images` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.customBaseImages.removeCustomBaseImage`<a id="snykcustombaseimagesremovecustombaseimage"></a>

Delete a custom base image resource. (the related container project is unaffected)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCustomBaseImageResponse =
  await snyk.customBaseImages.removeCustomBaseImage({
    version: "wip",
    custombaseimageId: "custombaseimageId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### custombaseimageId: `string`<a id="custombaseimageid-string"></a>

Unique identifier for custom base image

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_base_images/{custombaseimage_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.customBaseImages.updateAttributes`<a id="snykcustombaseimagesupdateattributes"></a>

Updates a custom base image's attributes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAttributesResponse = await snyk.customBaseImages.updateAttributes({
  version: "wip",
  custombaseimageId: "custombaseimageId_example",
  data: {
    attributes: {
      include_in_recommendations: true,
    },
    type: "custom_base_image",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`CustomBaseImagePatchRequestData`](./models/custom-base-image-patch-request-data.ts)<a id="data-custombaseimagepatchrequestdatamodelscustom-base-image-patch-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### custombaseimageId: `string`<a id="custombaseimageid-string"></a>

Unique identifier for custom base image

#### 🔄 Return<a id="🔄-return"></a>

[CustomBaseImageResponse](./models/custom-base-image-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_base_images/{custombaseimage_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.iacSettings.getForGroup`<a id="snykiacsettingsgetforgroup"></a>

Get the Infrastructure as Code Settings for a group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getForGroupResponse = await snyk.iacSettings.getForGroup({
  version: "wip",
  groupId: "groupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### groupId: `string`<a id="groupid-string"></a>

The id of the group whose Infrastructure as Code settings are requested

#### 🔄 Return<a id="🔄-return"></a>

[IacSettingsGetForGroupResponse](./models/iac-settings-get-for-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/settings/iac` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.iacSettings.getForOrgIac`<a id="snykiacsettingsgetfororgiac"></a>

Get the Infrastructure as Code Settings for an org.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getForOrgIacResponse = await snyk.iacSettings.getForOrgIac({
  version: "wip",
  orgId: "orgId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The id of the org whose Infrastructure as Code settings are requested.

#### 🔄 Return<a id="🔄-return"></a>

[IacSettingsGetForOrgIacResponse](./models/iac-settings-get-for-org-iac-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/settings/iac` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.iacSettings.updateForGroup`<a id="snykiacsettingsupdateforgroup"></a>

Update the Infrastructure as Code Settings for a group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateForGroupResponse = await snyk.iacSettings.updateForGroup({
  version: "wip",
  groupId: "groupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### groupId: `string`<a id="groupid-string"></a>

The id of the group whose Infrastructure as Code settings are getting updated

##### data: [`GroupIacSettingsRequest`](./models/group-iac-settings-request.ts)<a id="data-groupiacsettingsrequestmodelsgroup-iac-settings-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IacSettingsUpdateForGroupResponse](./models/iac-settings-update-for-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/settings/iac` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.iacSettings.updateForOrg`<a id="snykiacsettingsupdatefororg"></a>

Update the Infrastructure as Code Settings for an org.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateForOrgResponse = await snyk.iacSettings.updateForOrg({
  version: "wip",
  orgId: "orgId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The id of the org whose Infrastructure as Code settings are getting updated

##### data: [`OrgIacSettingsRequest`](./models/org-iac-settings-request.ts)<a id="data-orgiacsettingsrequestmodelsorg-iac-settings-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IacSettingsUpdateForOrgResponse](./models/iac-settings-update-for-org-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/settings/iac` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.invites.cancelPendingInvitation`<a id="snykinvitescancelpendinginvitation"></a>

Cancel a pending user invitations to an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelPendingInvitationResponse =
  await snyk.invites.cancelPendingInvitation({
    orgId: "orgId_example",
    inviteId: "inviteId_example",
    version: "wip",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

The id of the org the user is being invited to

##### inviteId: `string`<a id="inviteid-string"></a>

The id of the pending invite to cancel

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/invites/{invite_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.invites.listPendingUserInvitations`<a id="snykinviteslistpendinguserinvitations"></a>

List pending user invitations to an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPendingUserInvitationsResponse =
  await snyk.invites.listPendingUserInvitations({
    orgId: "orgId_example",
    version: "wip",
    limit: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

The id of the org the user is being invited to

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[InvitesListPendingUserInvitationsResponse](./models/invites-list-pending-user-invitations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/invites` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.invites.userToOrganization`<a id="snykinvitesusertoorganization"></a>

Invite a user to an organization with a role.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const userToOrganizationResponse = await snyk.invites.userToOrganization({
  version: "wip",
  orgId: "orgId_example",
  data: {
    attributes: {
      email: "example@email.com",
      role: null,
    },
    type: "org_invitation",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`OrgInvitationPostData`](./models/org-invitation-post-data.ts)<a id="data-orginvitationpostdatamodelsorg-invitation-post-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The id of the org the user is being invited to

#### 🔄 Return<a id="🔄-return"></a>

[InvitesUserToOrganizationResponse](./models/invites-user-to-organization-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/invites` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.issues.byGroupId`<a id="snykissuesbygroupid"></a>

Get a list of a group's issues.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const byGroupIdResponse = await snyk.issues.byGroupId({
  version: "wip",
  limit: 10,
  groupId: "4a18d42f-0706-4ad0-b127-24078731fbed",
  scanItemId: "4a18d42f-0706-4ad0-b127-24078731fbee",
  scanItemType: "project",
  type: "cloud",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### groupId: `string`<a id="groupid-string"></a>

Group ID

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### scanItemId: `string`<a id="scanitemid-string"></a>

A scan item id to filter issues through their scan item relationship.

##### scanItemType: [`ScanItemType`](./models/scan-item-type.ts)<a id="scanitemtype-scanitemtypemodelsscan-item-typets"></a>

A scan item types to filter issues through their scan item relationship.

##### type: [`TypeDef`](./models/type-def.ts)<a id="type-typedefmodelstype-defts"></a>

An issue type to filter issues.

##### updatedBefore: `string`<a id="updatedbefore-string"></a>

A filter to select issues updated before this date.

##### updatedAfter: `string`<a id="updatedafter-string"></a>

A filter to select issues updated after this date.

##### createdBefore: `string`<a id="createdbefore-string"></a>

A filter to select issues created before this date.

##### createdAfter: `string`<a id="createdafter-string"></a>

A filter to select issues created after this date.

##### effectiveSeverityLevel: `string`[]<a id="effectiveseveritylevel-string"></a>

One or more effective severity levels to filter issues.

##### status: `string`[]<a id="status-string"></a>

An issue\'s status

##### ignored: `boolean`<a id="ignored-boolean"></a>

Whether an issue is ignored or not.

#### 🔄 Return<a id="🔄-return"></a>

[IssuesByGroupIdResponse](./models/issues-by-group-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/issues` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.issues.getById`<a id="snykissuesgetbyid"></a>

Get an issue

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await snyk.issues.getById({
  version: "wip",
  orgId: "4a18d42f-0706-4ad0-b127-24078731fbed",
  issueId: "4a18d42f-0706-4ad0-b127-24078731fbed",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### issueId: `string`<a id="issueid-string"></a>

Issue ID

#### 🔄 Return<a id="🔄-return"></a>

[IssuesGetByIssueIdResponse](./models/issues-get-by-issue-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/issues/{issue_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.issues.getByIssueId`<a id="snykissuesgetbyissueid"></a>

Get an issue

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIssueIdResponse = await snyk.issues.getByIssueId({
  version: "wip",
  groupId: "4a18d42f-0706-4ad0-b127-24078731fbed",
  issueId: "4a18d42f-0706-4ad0-b127-24078731fbed",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### groupId: `string`<a id="groupid-string"></a>

Group ID

##### issueId: `string`<a id="issueid-string"></a>

Issue ID

#### 🔄 Return<a id="🔄-return"></a>

[IssuesGetByIssueIdResponse](./models/issues-get-by-issue-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/issues/{issue_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.issues.listByOrgId`<a id="snykissueslistbyorgid"></a>

Get a list of an organization's issues.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByOrgIdResponse = await snyk.issues.listByOrgId({
  version: "wip",
  limit: 10,
  orgId: "4a18d42f-0706-4ad0-b127-24078731fbed",
  scanItemId: "4a18d42f-0706-4ad0-b127-24078731fbee",
  scanItemType: "project",
  type: "cloud",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### scanItemId: `string`<a id="scanitemid-string"></a>

A scan item id to filter issues through their scan item relationship.

##### scanItemType: [`ScanItemType`](./models/scan-item-type.ts)<a id="scanitemtype-scanitemtypemodelsscan-item-typets"></a>

A scan item types to filter issues through their scan item relationship.

##### type: [`TypeDef`](./models/type-def.ts)<a id="type-typedefmodelstype-defts"></a>

An issue type to filter issues.

##### updatedBefore: `string`<a id="updatedbefore-string"></a>

A filter to select issues updated before this date.

##### updatedAfter: `string`<a id="updatedafter-string"></a>

A filter to select issues updated after this date.

##### createdBefore: `string`<a id="createdbefore-string"></a>

A filter to select issues created before this date.

##### createdAfter: `string`<a id="createdafter-string"></a>

A filter to select issues created after this date.

##### effectiveSeverityLevel: `string`[]<a id="effectiveseveritylevel-string"></a>

One or more effective severity levels to filter issues.

##### status: `string`[]<a id="status-string"></a>

An issue\'s status

##### ignored: `boolean`<a id="ignored-boolean"></a>

Whether an issue is ignored or not.

#### 🔄 Return<a id="🔄-return"></a>

[IssuesByGroupIdResponse](./models/issues-by-group-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/issues` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.issues.listByPackage`<a id="snykissueslistbypackage"></a>

Query issues for a specific package version identified by Package URL (purl). Snyk returns only direct vulnerabilities. Transitive vulnerabilities (from dependencies) are not returned because they can vary depending on context.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByPackageResponse = await snyk.issues.listByPackage({
  version: "wip",
  purl: "purl_example",
  orgId: "orgId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### purl: `string`<a id="purl-string"></a>

A URI-encoded Package URL (purl). Supported purl types are apk, cargo, cocoapods, composer, deb, gem, generic, golang, hex, maven, npm, nuget, pub, pypi, rpm, and swift. A version for the package is also required.

##### orgId: `string`<a id="orgid-string"></a>

Unique identifier for an organization

##### offset: `number`<a id="offset-number"></a>

Specify the number of results to skip before returning results. Must be greater than or equal to 0. Default is 0.

##### limit: `number`<a id="limit-number"></a>

Specify the number of results to return. Must be greater than 0 and less than 1000. Default is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[IssuesResponse](./models/issues-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/packages/{purl}/issues` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.issues.queryForPackages`<a id="snykissuesqueryforpackages"></a>

This endpoint is not available to all customers. If you are interested please contact support. Query issues for a batch of packages identified by Package URL (purl). Only direct vulnerabilities are returned, transitive vulnerabilities (from dependencies) are not returned because they can vary depending on context.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryForPackagesResponse = await snyk.issues.queryForPackages({
  version: "wip",
  orgId: "orgId_example",
  data: {
    attributes: {
      purls: ["purls_example"],
    },
    type: "resource",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`BulkPackageUrlsRequestBodyData`](./models/bulk-package-urls-request-body-data.ts)<a id="data-bulkpackageurlsrequestbodydatamodelsbulk-package-urls-request-body-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Unique identifier for an organization

#### 🔄 Return<a id="🔄-return"></a>

[IssuesWithPurlsResponse](./models/issues-with-purls-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/packages/issues` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.openAPI.getEffectiveVersion`<a id="snykopenapigeteffectiveversion"></a>

Get OpenAPI specification effective at version.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEffectiveVersionResponse = await snyk.openAPI.getEffectiveVersion({
  version: "version_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the API

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/openapi/{version}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.openAPI.listAvailableVersions`<a id="snykopenapilistavailableversions"></a>

List available versions of OpenAPI specification

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableVersionsResponse =
  await snyk.openAPI.listAvailableVersions();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/openapi` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.orgs.getDetails`<a id="snykorgsgetdetails"></a>

Get the full details of an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await snyk.orgs.getDetails({
  version: "wip",
  orgId: "b667f176-df52-4b0a-9954-117af6b05ab7",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Unique identifier for org

#### 🔄 Return<a id="🔄-return"></a>

[OrgsGetDetailsResponse](./models/orgs-get-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.orgs.listAccessibleOrganizations`<a id="snykorgslistaccessibleorganizations"></a>

Get a paginated list of organizations you have access to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccessibleOrganizationsResponse =
  await snyk.orgs.listAccessibleOrganizations({
    version: "wip",
    limit: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### groupId: `string`<a id="groupid-string"></a>

If set, only return organizations within the specified group

##### isPersonal: `boolean`<a id="ispersonal-boolean"></a>

If true, only return organizations that are not part of a group.

##### slug: `string`<a id="slug-string"></a>

Only return orgs whose slug exactly matches this value.

##### name: `string`<a id="name-string"></a>

Only return orgs whose name contains this value.

##### expand: `string`[]<a id="expand-string"></a>

Expand the specified related resources in the response to include their attributes.

#### 🔄 Return<a id="🔄-return"></a>

[OrgsListAccessibleOrganizationsResponse](./models/orgs-list-accessible-organizations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.orgs.listGroupOrgs`<a id="snykorgslistgrouporgs"></a>

Get a paginated list of all the organizations belonging to the group.
By default, this endpoint returns the organizations in alphabetical order of their name.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGroupOrgsResponse = await snyk.orgs.listGroupOrgs({
  version: "wip",
  limit: 10,
  groupId: "b667f176-df52-4b0a-9954-117af6b05ab7",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### groupId: `string`<a id="groupid-string"></a>

Unique identifier for group

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### name: `string`<a id="name-string"></a>

Only return organizations whose name contains this value. Case insensitive.

##### slug: `string`<a id="slug-string"></a>

Only return organizations whose slug exactly matches this value. Case sensitive.

#### 🔄 Return<a id="🔄-return"></a>

[OrgsListGroupOrgsResponse](./models/orgs-list-group-orgs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/orgs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.orgs.updateDetails`<a id="snykorgsupdatedetails"></a>

Update the details of an organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDetailsResponse = await snyk.orgs.updateDetails({
  version: "wip",
  orgId: "b667f176-df52-4b0a-9954-117af6b05ab7",
  data: {
    type: "resource",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`OrgsUpdateDetailsRequestData`](./models/orgs-update-details-request-data.ts)<a id="data-orgsupdatedetailsrequestdatamodelsorgs-update-details-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Unique identifier for org

#### 🔄 Return<a id="🔄-return"></a>

[OrgsUpdateDetailsResponse](./models/orgs-update-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.projects.deleteByProjectId`<a id="snykprojectsdeletebyprojectid"></a>

Delete one project in the organization by project ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByProjectIdResponse = await snyk.projects.deleteByProjectId({
  orgId: "orgId_example",
  projectId: "projectId_example",
  version: "wip",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

The ID of the org to which the project belongs to.

##### projectId: `string`<a id="projectid-string"></a>

The ID of the project.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/projects/{project_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.projects.getByProjectId`<a id="snykprojectsgetbyprojectid"></a>

Get one project of the organization by project ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByProjectIdResponse = await snyk.projects.getByProjectId({
  orgId: "orgId_example",
  projectId: "projectId_example",
  version: "wip",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

The ID of the org to which the project belongs to.

##### projectId: `string`<a id="projectid-string"></a>

The ID of the project.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### expand: `string`[]<a id="expand-string"></a>

Expand relationships.

##### metaLatestIssueCounts: `boolean`<a id="metalatestissuecounts-boolean"></a>

Include a summary count for the issues found in the most recent scan of this project

##### metaLatestDependencyTotal: `boolean`<a id="metalatestdependencytotal-boolean"></a>

Include the total number of dependencies found in the most recent scan of this project

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsGetByProjectIdResponse](./models/projects-get-by-project-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/projects/{project_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.projects.listForOrg`<a id="snykprojectslistfororg"></a>

List all Projects for an Org.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listForOrgResponse = await snyk.projects.listForOrg({
  orgId: "orgId_example",
  metaCount: "only",
  version: "wip",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

The ID of the org that the projects belong to.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### targetId: `string`[]<a id="targetid-string"></a>

Return projects that belong to the provided targets

##### targetReference: `string`<a id="targetreference-string"></a>

Return projects that match the provided target reference

##### targetFile: `string`<a id="targetfile-string"></a>

Return projects that match the provided target file

##### targetRuntime: `string`<a id="targetruntime-string"></a>

Return projects that match the provided target runtime

##### metaCount: `'only'`<a id="metacount-only"></a>

The collection count.

##### ids: `string`[]<a id="ids-string"></a>

Return projects that match the provided IDs.

##### names: `string`[]<a id="names-string"></a>

Return projects that match the provided names.

##### namesStartWith: `string`[]<a id="namesstartwith-string"></a>

Return projects with names starting with the specified prefix.

##### origins: `string`[]<a id="origins-string"></a>

Return projects that match the provided origins.

##### types: `string`[]<a id="types-string"></a>

Return projects that match the provided types.

##### expand: `string`[]<a id="expand-string"></a>

Expand relationships.

##### metaLatestIssueCounts: `boolean`<a id="metalatestissuecounts-boolean"></a>

Include a summary count for the issues found in the most recent scan of this project

##### metaLatestDependencyTotal: `boolean`<a id="metalatestdependencytotal-boolean"></a>

Include the total number of dependencies found in the most recent scan of this project

##### cliMonitoredBefore: `string`<a id="climonitoredbefore-string"></a>

Filter projects uploaded and monitored before this date (encoded value)

##### cliMonitoredAfter: `string`<a id="climonitoredafter-string"></a>

Filter projects uploaded and monitored after this date (encoded value)

##### importingUserPublicId: `string`[]<a id="importinguserpublicid-string"></a>

Return projects that match the provided importing user public ids.

##### tags: `string`[]<a id="tags-string"></a>

Return projects that match all the provided tags

##### businessCriticality: `string`[]<a id="businesscriticality-string"></a>

Return projects that match all the provided business_criticality value

##### environment: `string`[]<a id="environment-string"></a>

Return projects that match all the provided environment values

##### lifecycle: `string`[]<a id="lifecycle-string"></a>

Return projects that match all the provided lifecycle values

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsListForOrgResponse](./models/projects-list-for-org-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.projects.updateByProjectId`<a id="snykprojectsupdatebyprojectid"></a>

Updates one project of the organization by project ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByProjectIdResponse = await snyk.projects.updateByProjectId({
  version: "wip",
  orgId: "orgId_example",
  projectId: "projectId_example",
  data: {
    attributes: {
      tags: [
        {
          key: "tag-key",
          value: "tag-value",
        },
      ],
      business_criticality: ["medium"],
      environment: ["external", "hosted"],
      lifecycle: ["production"],
      test_frequency: "daily",
    },
    id: "331ede0a-de94-456f-b788-166caeca58bf",
    relationships: {},
    type: "project",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`PatchProjectRequestData`](./models/patch-project-request-data.ts)<a id="data-patchprojectrequestdatamodelspatch-project-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The ID of the Org the project belongs to.

##### projectId: `string`<a id="projectid-string"></a>

The ID of the project to patch.

##### expand: `string`[]<a id="expand-string"></a>

Expand relationships.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsUpdateByProjectIdResponse](./models/projects-update-by-project-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/projects/{project_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.sBOM.getProjectDocument`<a id="snyksbomgetprojectdocument"></a>

This endpoint lets you retrieve the SBOM document of a software project.
It supports the following formats:
* CycloneDX version 1.4 in JSON (set `format` to `cyclonedx1.4+json`).
* CycloneDX version 1.4 in XML (set `format` to `cyclonedx1.4+xml`).
* SPDX version 2.3 in JSON (set `format` to `spdx2.3+json`).

By default it will respond with an empty JSON:API response.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectDocumentResponse = await snyk.sBOM.getProjectDocument({
  version: "wip",
  orgId: "orgId_example",
  projectId: "projectId_example",
  format: "cyclonedx1.4+json",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Unique identifier for an organization

##### projectId: `string`<a id="projectid-string"></a>

Unique identifier for a project

##### format: `'cyclonedx1.4+json' | 'cyclonedx1.4+xml' | 'spdx2.3+json'`<a id="format-cyclonedx14json--cyclonedx14xml--spdx23json"></a>

The desired SBOM format of the response.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/projects/{project_id}/sbom` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.sastSettings.getForOrg`<a id="snyksastsettingsgetfororg"></a>

Retrieves the SAST settings for an org

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getForOrgResponse = await snyk.sastSettings.getForOrg({
  version: "wip",
  orgId: "orgId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The id of the org for which we want to retrieve the SAST settings

#### 🔄 Return<a id="🔄-return"></a>

[SastSettingsGetForOrgResponse](./models/sast-settings-get-for-org-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/settings/sast` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.sastSettings.toggleSnykCodeSettings`<a id="snyksastsettingstogglesnykcodesettings"></a>

Enable/Disable the Snyk Code settings for an org

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const toggleSnykCodeSettingsResponse =
  await snyk.sastSettings.toggleSnykCodeSettings({
    version: "wip",
    orgId: "orgId_example",
    data: {
      attributes: {
        sast_enabled: true,
      },
      id: "id_example",
      type: "type_example",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`SastSettingsToggleSnykCodeSettingsRequestData`](./models/sast-settings-toggle-snyk-code-settings-request-data.ts)<a id="data-sastsettingstogglesnykcodesettingsrequestdatamodelssast-settings-toggle-snyk-code-settings-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The id of the org for which we want to update the Snyk Code setting

#### 🔄 Return<a id="🔄-return"></a>

[SastSettingsToggleSnykCodeSettingsResponse](./models/sast-settings-toggle-snyk-code-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/settings/sast` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.createForOrganization`<a id="snykserviceaccountscreatefororganization"></a>

Create a service account for an organization. The service account can be used to generate access tokens.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createForOrganizationResponse =
  await snyk.serviceAccounts.createForOrganization({
    orgId: "orgId_example",
    version: "wip",
    data: {
      attributes: {
        auth_type: "api_key",
        name: "name_example",
        role_id: "role_id_example",
      },
      type: "service_account",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ServiceAccountsCreateForOrganizationRequestData`](./models/service-accounts-create-for-organization-request-data.ts)<a id="data-serviceaccountscreatefororganizationrequestdatamodelsservice-accounts-create-for-organization-request-datats"></a>

##### orgId: `string`<a id="orgid-string"></a>

The ID of the Snyk Organization that is creating and will own the service account.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsCreateForOrganizationResponse](./models/service-accounts-create-for-organization-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/service_accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.createGroup`<a id="snykserviceaccountscreategroup"></a>

Create a service account for a group. The service account can be used to generate access tokens. Currently, we only allow group service accounts using default group roles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createGroupResponse = await snyk.serviceAccounts.createGroup({
  groupId: "groupId_example",
  version: "wip",
  data: {
    attributes: {
      auth_type: "api_key",
      name: "name_example",
      role_id: "role_id_example",
    },
    type: "service_account",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ServiceAccountsCreateGroupRequestData`](./models/service-accounts-create-group-request-data.ts)<a id="data-serviceaccountscreategrouprequestdatamodelsservice-accounts-create-group-request-datats"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the Snyk Group that is creating and owns the service account

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsCreateGroupResponse](./models/service-accounts-create-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/service_accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.deleteGroupServiceAccount`<a id="snykserviceaccountsdeletegroupserviceaccount"></a>

Permanently delete a group-level service account by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteGroupServiceAccountResponse =
  await snyk.serviceAccounts.deleteGroupServiceAccount({
    groupId: "groupId_example",
    serviceaccountId: "serviceaccountId_example",
    version: "wip",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the Snyk Group that owns the service account.

##### serviceaccountId: `string`<a id="serviceaccountid-string"></a>

The ID of the service account.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/service_accounts/{serviceaccount_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.deleteOrgServiceAccount`<a id="snykserviceaccountsdeleteorgserviceaccount"></a>

Delete a service account in an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOrgServiceAccountResponse =
  await snyk.serviceAccounts.deleteOrgServiceAccount({
    orgId: "orgId_example",
    serviceaccountId: "serviceaccountId_example",
    version: "wip",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

The ID of org to which the service account belongs.

##### serviceaccountId: `string`<a id="serviceaccountid-string"></a>

The ID of the service account.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/service_accounts/{serviceaccount_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.getGroupServiceAccount`<a id="snykserviceaccountsgetgroupserviceaccount"></a>

Get a group-level service account by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupServiceAccountResponse =
  await snyk.serviceAccounts.getGroupServiceAccount({
    groupId: "groupId_example",
    serviceaccountId: "serviceaccountId_example",
    version: "wip",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the Snyk Group that owns the service account.

##### serviceaccountId: `string`<a id="serviceaccountid-string"></a>

The ID of the service account.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsGetGroupServiceAccountResponse](./models/service-accounts-get-group-service-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/service_accounts/{serviceaccount_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.getOrganizationAccountById`<a id="snykserviceaccountsgetorganizationaccountbyid"></a>

Get an organization-level service account by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationAccountByIdResponse =
  await snyk.serviceAccounts.getOrganizationAccountById({
    orgId: "orgId_example",
    serviceaccountId: "serviceaccountId_example",
    version: "wip",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

The ID of the Snyk Organization that owns the service account.

##### serviceaccountId: `string`<a id="serviceaccountid-string"></a>

The ID of the service account.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsGetOrganizationAccountByIdResponse](./models/service-accounts-get-organization-account-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/service_accounts/{serviceaccount_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.listGroupServiceAccounts`<a id="snykserviceaccountslistgroupserviceaccounts"></a>

Get all service accounts for a group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGroupServiceAccountsResponse =
  await snyk.serviceAccounts.listGroupServiceAccounts({
    groupId: "groupId_example",
    limit: 10,
    version: "wip",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the Snyk Group that owns the service accounts.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsListGroupServiceAccountsResponse](./models/service-accounts-list-group-service-accounts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/service_accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.listOrganizationServiceAccounts`<a id="snykserviceaccountslistorganizationserviceaccounts"></a>

Get all service accounts for an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOrganizationServiceAccountsResponse =
  await snyk.serviceAccounts.listOrganizationServiceAccounts({
    orgId: "orgId_example",
    limit: 10,
    version: "wip",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgId: `string`<a id="orgid-string"></a>

The ID of the Snyk Organization that owns the service accounts.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsListOrganizationServiceAccountsResponse](./models/service-accounts-list-organization-service-accounts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/service_accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.manageClientSecret`<a id="snykserviceaccountsmanageclientsecret"></a>

Manage the client secret of a group service account by the service account ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const manageClientSecretResponse =
  await snyk.serviceAccounts.manageClientSecret({
    groupId: "groupId_example",
    serviceaccountId: "serviceaccountId_example",
    version: "wip",
    data: {
      attributes: {
        mode: "replace",
      },
      type: "service_account",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ServiceAccountsManageClientSecretRequestData`](./models/service-accounts-manage-client-secret-request-data.ts)<a id="data-serviceaccountsmanageclientsecretrequestdatamodelsservice-accounts-manage-client-secret-request-datats"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the Snyk Group that owns the service account.

##### serviceaccountId: `string`<a id="serviceaccountid-string"></a>

The ID of the service account.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsManageClientSecretResponse](./models/service-accounts-manage-client-secret-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/service_accounts/{serviceaccount_id}/secrets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.manageClientSecretForOrganizationServiceAccount`<a id="snykserviceaccountsmanageclientsecretfororganizationserviceaccount"></a>

Manage the client secret of an organization-level service account by the service account ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const manageClientSecretForOrganizationServiceAccountResponse =
  await snyk.serviceAccounts.manageClientSecretForOrganizationServiceAccount({
    orgId: "orgId_example",
    serviceaccountId: "serviceaccountId_example",
    version: "wip",
    data: {
      attributes: {
        mode: "replace",
      },
      type: "service_account",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ServiceAccountsManageClientSecretRequestData`](./models/service-accounts-manage-client-secret-request-data.ts)<a id="data-serviceaccountsmanageclientsecretrequestdatamodelsservice-accounts-manage-client-secret-request-datats"></a>

##### orgId: `string`<a id="orgid-string"></a>

The ID of the Snyk Organization that owns the service account.

##### serviceaccountId: `string`<a id="serviceaccountid-string"></a>

The ID of the service account.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsManageClientSecretForOrganizationServiceAccountResponse](./models/service-accounts-manage-client-secret-for-organization-service-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/service_accounts/{serviceaccount_id}/secrets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.updateGroupNameById`<a id="snykserviceaccountsupdategroupnamebyid"></a>

Update the name of a group's service account by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateGroupNameByIdResponse =
  await snyk.serviceAccounts.updateGroupNameById({
    groupId: "groupId_example",
    serviceaccountId: "serviceaccountId_example",
    version: "wip",
    data: {
      attributes: {
        name: "name_example",
      },
      id: "id_example",
      type: "service_account",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ServiceAccountsUpdateGroupNameByIdRequestData`](./models/service-accounts-update-group-name-by-id-request-data.ts)<a id="data-serviceaccountsupdategroupnamebyidrequestdatamodelsservice-accounts-update-group-name-by-id-request-datats"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the Snyk Group that owns the service account.

##### serviceaccountId: `string`<a id="serviceaccountid-string"></a>

The ID of the service account.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsUpdateGroupNameByIdResponse](./models/service-accounts-update-group-name-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/service_accounts/{serviceaccount_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.serviceAccounts.updateOrganizationServiceAccountName`<a id="snykserviceaccountsupdateorganizationserviceaccountname"></a>

Update the name of an organization-level service account by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOrganizationServiceAccountNameResponse =
  await snyk.serviceAccounts.updateOrganizationServiceAccountName({
    orgId: "orgId_example",
    serviceaccountId: "serviceaccountId_example",
    version: "wip",
    data: {
      attributes: {
        name: "name_example",
      },
      id: "id_example",
      type: "service_account",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ServiceAccountsUpdateOrganizationServiceAccountNameRequestData`](./models/service-accounts-update-organization-service-account-name-request-data.ts)<a id="data-serviceaccountsupdateorganizationserviceaccountnamerequestdatamodelsservice-accounts-update-organization-service-account-name-request-datats"></a>

##### orgId: `string`<a id="orgid-string"></a>

The ID of the Snyk Organization that owns the service account.

##### serviceaccountId: `string`<a id="serviceaccountid-string"></a>

The ID of the service account.

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

#### 🔄 Return<a id="🔄-return"></a>

[ServiceAccountsUpdateOrganizationServiceAccountNameResponse](./models/service-accounts-update-organization-service-account-name-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/service_accounts/{serviceaccount_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.slack.getChannelNameById`<a id="snykslackgetchannelnamebyid"></a>

Requires the Snyk Slack App to be set up for this org. It will return the Slack channel name for the provided Slack channel ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChannelNameByIdResponse = await snyk.slack.getChannelNameById({
  version: "wip",
  orgId: "orgId_example",
  channelId: "channelId_example",
  tenantId: "tenantId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### channelId: `string`<a id="channelid-string"></a>

Slack Channel ID

##### tenantId: `string`<a id="tenantid-string"></a>

Tenant ID

#### 🔄 Return<a id="🔄-return"></a>

[SlackGetChannelNameByIdResponse](./models/slack-get-channel-name-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/slack_app/{tenant_id}/channels/{channel_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.slack.getChannels`<a id="snykslackgetchannels"></a>

Requires the Snyk Slack App to be set up for this org, will retrieve a list of channels the Snyk Slack App can access. Note that it is currently only possible to page forwards through this collection, no prev links will be generated and the ending_before parameter will not function.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChannelsResponse = await snyk.slack.getChannels({
  limit: 1000,
  version: "wip",
  orgId: "orgId_example",
  tenantId: "tenantId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### tenantId: `string`<a id="tenantid-string"></a>

Tenant ID

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[SlackGetChannelsResponse](./models/slack-get-channels-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/slack_app/{tenant_id}/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.slackSettings.createDefaultNotificationSettings`<a id="snykslacksettingscreatedefaultnotificationsettings"></a>

Create new Slack notification default settings for a given tenant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDefaultNotificationSettingsResponse =
  await snyk.slackSettings.createDefaultNotificationSettings({
    version: "wip",
    orgId: "orgId_example",
    botId: "botId_example",
    data: {
      attributes: {
        severity_threshold: "high",
        target_channel_id: "slack://channel?team=team-id&id=channel-id",
      },
      type: "slack",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`SettingsRequestData`](./models/settings-request-data.ts)<a id="data-settingsrequestdatamodelssettings-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### botId: `string`<a id="botid-string"></a>

Bot ID

#### 🔄 Return<a id="🔄-return"></a>

[SlackSettingsCreateDefaultNotificationSettingsResponse](./models/slack-settings-create-default-notification-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/slack_app/{bot_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.slackSettings.getDefaultNotificationSettings`<a id="snykslacksettingsgetdefaultnotificationsettings"></a>

Get Slack integration default notification settings for the provided tenant ID and bot ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDefaultNotificationSettingsResponse =
  await snyk.slackSettings.getDefaultNotificationSettings({
    version: "wip",
    orgId: "orgId_example",
    botId: "botId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### botId: `string`<a id="botid-string"></a>

Bot ID

#### 🔄 Return<a id="🔄-return"></a>

[SlackSettingsGetDefaultNotificationSettingsResponse](./models/slack-settings-get-default-notification-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/slack_app/{bot_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.slackSettings.getOverridesForProjects`<a id="snykslacksettingsgetoverridesforprojects"></a>

Slack notification settings overrides for projects. These settings overrides the default settings configured for the tenant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOverridesForProjectsResponse =
  await snyk.slackSettings.getOverridesForProjects({
    version: "wip",
    limit: 10,
    orgId: "orgId_example",
    botId: "botId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### botId: `string`<a id="botid-string"></a>

Bot ID

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

#### 🔄 Return<a id="🔄-return"></a>

[GetProjectSettingsCollection](./models/get-project-settings-collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/slack_app/{bot_id}/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.slackSettings.projectOverride`<a id="snykslacksettingsprojectoverride"></a>

Create Slack settings override for a project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const projectOverrideResponse = await snyk.slackSettings.projectOverride({
  version: "wip",
  orgId: "orgId_example",
  projectId: "projectId_example",
  botId: "botId_example",
  data: {
    attributes: {
      severity_threshold: "high",
      target_channel_id: "slack://channel?team=team-id&id=channel-id",
    },
    type: "slack",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`SettingsRequestData`](./models/settings-request-data.ts)<a id="data-settingsrequestdatamodelssettings-request-datats"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### projectId: `string`<a id="projectid-string"></a>

Project ID

##### botId: `string`<a id="botid-string"></a>

Bot ID

#### 🔄 Return<a id="🔄-return"></a>

[SlackSettingsProjectOverrideResponse](./models/slack-settings-project-override-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/slack_app/{bot_id}/projects/{project_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.slackSettings.removeIntegration`<a id="snykslacksettingsremoveintegration"></a>

Remove the given Slack App integration

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeIntegrationResponse = await snyk.slackSettings.removeIntegration({
  version: "wip",
  orgId: "orgId_example",
  botId: "botId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### botId: `string`<a id="botid-string"></a>

Bot ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/slack_app/{bot_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.slackSettings.removeProjectOverride`<a id="snykslacksettingsremoveprojectoverride"></a>

Remove Slack settings override for a project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeProjectOverrideResponse =
  await snyk.slackSettings.removeProjectOverride({
    version: "wip",
    orgId: "orgId_example",
    projectId: "projectId_example",
    botId: "botId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### projectId: `string`<a id="projectid-string"></a>

Project ID

##### botId: `string`<a id="botid-string"></a>

Bot ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/slack_app/{bot_id}/projects/{project_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.slackSettings.updateNotificationSettingsForProject`<a id="snykslacksettingsupdatenotificationsettingsforproject"></a>

Update Slack notification settings for a project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNotificationSettingsForProjectResponse =
  await snyk.slackSettings.updateNotificationSettingsForProject({
    version: "wip",
    orgId: "orgId_example",
    botId: "botId_example",
    projectId: "projectId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

Org ID

##### botId: `string`<a id="botid-string"></a>

Bot ID

##### projectId: `string`<a id="projectid-string"></a>

Project ID

##### data: [`ProjectSettingsPatchRequestData`](./models/project-settings-patch-request-data.ts)<a id="data-projectsettingspatchrequestdatamodelsproject-settings-patch-request-datats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SlackSettingsUpdateNotificationSettingsForProjectResponse](./models/slack-settings-update-notification-settings-for-project-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/slack_app/{bot_id}/projects/{project_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.targets.deleteById`<a id="snyktargetsdeletebyid"></a>

Delete the specified target.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await snyk.targets.deleteById({
  version: "wip",
  orgId: "orgId_example",
  targetId: "targetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The id of the org to delete

##### targetId: `string`<a id="targetid-string"></a>

The id of the target to delete

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/targets/{target_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.targets.getById`<a id="snyktargetsgetbyid"></a>

Get a specified target for an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await snyk.targets.getById({
  version: "wip",
  orgId: "orgId_example",
  targetId: "targetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The id of the org to return the target from

##### targetId: `string`<a id="targetid-string"></a>

The id of the target to return

#### 🔄 Return<a id="🔄-return"></a>

[TargetsGetByIdResponse](./models/targets-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/targets/{target_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snyk.targets.listByOrgId`<a id="snyktargetslistbyorgid"></a>

Get a list of an organization's targets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByOrgIdResponse = await snyk.targets.listByOrgId({
  version: "wip",
  limit: 10,
  orgId: "orgId_example",
  excludeEmpty: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The requested version of the endpoint to process the request

##### orgId: `string`<a id="orgid-string"></a>

The id of the org to return a list of targets

##### startingAfter: `string`<a id="startingafter-string"></a>

Return the page of results immediately after this cursor

##### endingBefore: `string`<a id="endingbefore-string"></a>

Return the page of results immediately before this cursor

##### count: `boolean`<a id="count-boolean"></a>

Calculate total amount of filtered results

##### limit: `number`<a id="limit-number"></a>

Number of results to return per page

##### isPrivate: `boolean`<a id="isprivate-boolean"></a>

Return targets that match the provided value of is_private

##### excludeEmpty: `boolean`<a id="excludeempty-boolean"></a>

Return only the targets that has projects

##### url: `string`<a id="url-string"></a>

Return targets that match the provided remote_url.

##### sourceTypes: `string`[]<a id="sourcetypes-string"></a>

Return targets that match the provided source_types

##### displayName: `string`<a id="displayname-string"></a>

Return targets with display names starting with the provided string

##### createdGte: `string`<a id="createdgte-string"></a>

Return only targets which have been created at or after the specified date. 

#### 🔄 Return<a id="🔄-return"></a>

[TargetsListByOrgIdResponse](./models/targets-list-by-org-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orgs/{org_id}/targets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
