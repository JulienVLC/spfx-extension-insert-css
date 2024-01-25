# spfx-extension-insert-css
SPFx extension to inject a custom css to your SharePoint site

After deploying the App to your SharePoint App Catalog, in each site where the Extension is added, the stylesheet located at mydomain.sharepoint.com/sites/site1/SiteAssets/MyCustomCss.css will be loaded.
you will them be able to customize the css rules in order to customize the look and feel of your site.

# How to deploy the App
1. Compile and package your code:
```sh
gulp bundle --ship
gulp package-solution --ship
```

2. Upload the .sppkg to the SharePoint App Catalog

3. On your SharePoint site, add the App
