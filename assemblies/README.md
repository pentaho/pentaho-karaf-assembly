# Hitachi Vantara Karaf Assembly
This project is responsible for building custom Karaf assemblies using the new way.
This project is currently creating assemblies to Community Edition of the following products:
* PDI
* Server
* PME
* PRD
* PMR

Multiple karaf assemblies squash several resources that come from the common-resources artifact. 
When updating resources in the common-resources artifact make sure to update the corresponding 
squashed resources in the karaf assemblies.


More info available on Karaf documentation regarding:
* Assembly configurations for old version - http://karaf.apache.org/manual/latest/#_deprecated_old_style_maven_assembly
* Assembly configurations for current version - http://karaf.apache.org/manual/latest/#_maven_assembly



