Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network :forwarded_port, guest: 1337, host: 1337
    # config.vm.synced_folder ".", "/vagrant"
    config.vm.provision :shell, path: "bootstrap.sh"

    config.vm.provider "virtualbox" do |v|
        v.cpus = 4
        v.customize ["modifyvm", :id, "--cpuexecutioncap", "80"]
        v.memory = 1024
        v.name = "activityOverlord"
    end
end
